import { useEffect, useState } from 'react';
import Modal from '../components/modal';
const API_URL = process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8000';

const Works = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/work`)
      .then(res => res.json())
      .then(data => {
        setWork(data.work);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleTileClick = (item, event) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const allTags = [];
  allTags.push('all');
  work.forEach(item => {
    item.tags.forEach(tag => {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    });
  });

  return (
    <>
    <article>
      <div className='tags'>
        <span>view by tag: </span>
        { allTags.map(tag => (
            <button key={tag} className="tag-button" onClick={() => {
              const container = document.getElementById('workContainer');
              const items = container.getElementsByClassName('workItem');
              for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (tag === 'All' || item.classList.contains(tag)) {
                  item.style.display = 'block';
                } else {
                  item.style.display = 'none';
                }
              }
            }}>
              {tag}
            </button>
          ))}
      </div>
      <div id='workContainer'>
      {work.map((item, index) => (
        <section key={index} className={item.tags.join(' ') + ' workItem'} onClick={(event) => handleTileClick(item, event)}>
          <figure className="squareImage">
            <img src={item.imageUrl} alt={item.title}/>
          </figure>
          <h3 className="not-prose"><strong>{item.title}</strong></h3>
          <p>{item.short_description}</p>
          
          {item.link && (
            <a href={item.link} target="_blank" rel="noreferrer">
              View more
            </a>
          )}
        </section>
      ))}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} markdownString={selectedItem && selectedItem.long_description}>
      </Modal>
      </div>
    </article>
  </>
  );
};

export default Works;