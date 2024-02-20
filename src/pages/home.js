import React from 'react';
const Home = () =>{
  return (
    <article>
      <h1>Welcome</h1>
      <figure>
        <img src={require('../images/blueBox.png')} alt="" />
      </figure>
      <p>hello, welcome to my website.</p>
      <p>I'm and artist and programmer mostly working through research, sound and code. I create software and musical systems for the internet, embedded devices, and for live multichannel performance. I'm currently an adjunct professor at NYU and SVA where I teach courses in interactive and electronic art.</p> 
      <p>You can read my full CV <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1UEUJH0rG3EXOKU54lnbZp3_OOt17uwkNtAcwx7alBlo/edit">here</a></p>
    </article>
  );
}
export default Home;
