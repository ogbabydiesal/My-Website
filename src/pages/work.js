import React, { useEffect, useState } from 'react';
import Modal from '../components/modal';

const Works = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/work')
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
    console.log('Clicked item:', item);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
    <article>
      <div id='workContainer'>
      {work.map((item, index) => (
        <section key={index} className='workItem' onClick={(event) => handleTileClick(item, event)}>
          <figure className="squareImage">
            <img src={item.imageUrl} alt={item.title}/>
          </figure>
          <h3 className="not-prose"><strong>{item.title}</strong></h3>
          <p>{item.description}</p>
          
          {item.link && (
            <a href={item.link} target="_blank" rel="noreferrer">
              View more
            </a>
          )}
        </section>
      ))}
      </div>
    </article>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      {selectedItem && (
        <div className="modal-body">
          <h2>{selectedItem.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedItem.iframe }} />
          <p>{selectedItem.description}</p>
        </div>
      )}
    </Modal>
  </>
  );
};

export default Works;