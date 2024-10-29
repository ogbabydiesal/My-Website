import React from 'react';
const Home = () =>{
  return (
    <article>
      <h1>Welcome</h1>
      <figure>
        <img src={require('../images/blueBox.png')} alt="" />
      </figure>
      <p>hello, welcome to my website.</p>
      <p>I'm and artist and programmer mostly working through research, sound and code. I create software and musical systems for the internet, embedded devices, and for live multichannel performance. I'm currently an adjunct professor at NYU's Interactive Telecommunications Program (ITP) and the Integrated Design & Media (IDM) program where I teach courses in electronic art.</p>
      <p>Other affiliations include <a target="_blank" rel="noreferrer" href="https://sfpc.study/">School for Poetic Computation</a> where I teach <a href="https://sfpc.study/sessions/summer-24/musical-web" rel='noreferrer' target='_blank'>The Musical Web</a>, a 10-week exploration of sound and music on the internet, and <a href="https://larpa.solutions/" target="_blank" rel="noopener noreferrer">Larpa</a>, a worker-rented studio and communal gallery space dedicated to fostering experimental perspectives on digital culture.</p> 
      <p>You can read my full CV <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1UEUJH0rG3EXOKU54lnbZp3_OOt17uwkNtAcwx7alBlo/edit">here</a>.</p>
    </article>
  );
}
export default Home;
