import React from 'react';
const Home = () =>{
  return (
    <article>
      <figure>
        <img src={require('../images/blueBox.png')} alt="" />
      </figure>
      <p>Hello, welcome to my website.</p>
      <p>I'm a New York City based artist working mostly through music and code. My projects often begin with a technological or psychoacoustic curiosity. I'm interested in algorithmic approaches to sound composition, simulations, and manifestations of identity, tradition and history in electronic culture.</p> 
      <p> Read my full <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1UEUJH0rG3EXOKU54lnbZp3_OOt17uwkNtAcwx7alBlo/edit">CV HERE</a>.</p>
      <div>😙</div>
    </article>
  );
}
export default Home;
