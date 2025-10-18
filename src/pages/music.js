import React, { useEffect, useState } from 'react';

const Music = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <article>
      <div id='workContainer'>
      {work.map((item, index) => (
        <section key={index} className='workItem'>
          <figure className="squareImage prose-h6:">
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
  );
};

export default Music;