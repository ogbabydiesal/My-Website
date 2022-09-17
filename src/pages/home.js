import React from 'react';
const Home = () =>{
  return (
    <div className="main">
      <img src={require('../images/imsys1.png')}/>
      <br></br>
      <br></br>
      <p>Hello, welcome to my website.</p>
      <br></br>
      <p>I'm a New York City based composer and technologist working mostly through guitar, synthesis, electroacoustics and code. My projects often begin with computational research exploring physical sound models and psychoacoustic phenomena. I'm interested in algorithmic approaches to music making, simulation, and manifestations of identity, tradition and history in electronic audio culture.</p> 
      <br></br>
      <p> Read my full <a target="_blank" href="https://docs.google.com/document/d/1UEUJH0rG3EXOKU54lnbZp3_OOt17uwkNtAcwx7alBlo/edit">CV HERE</a>.</p>
      <br></br>
      <p>😙</p>
    </div>
  );
}
export default Home;
