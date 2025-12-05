import { useEffect, useState } from 'react';
import Modal from '../components/modal';
const API_URL = process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8000';

const Works = () => {
  const [work, setWork] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/contact`)
      .then(res => res.json())
      .then(data => {
        setWork(data.work);
        
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }, []);

  return (
    <>
    <article>
      <div id='workContainer'>
      {work.map((item, index) => (
        <a href={item.link}>
        <section key={index} className={'workItem'}>
          <div id="cardContainer">
            <figure className="squareImage">
              <img src={item.imageUrl} alt={item.title}/>
            </figure>
          </div>
          <h3 className="not-prose"><strong>{item.title}</strong></h3>
          <p style={{ fontStyle: 'italic' }}>{item.venue} </p>
          <p>{item.short_description}</p>
        </section>
        </a>
      ))
      
      }
      </div>
    </article>
  </>
  );
};

export default Works;