import React from 'react';
const Timelayer = () =>{
  return (
    <article> 
      <h1>Time Layer</h1>
      <figure>
        <img src={require('../images/timeLayer.png')} alt="" />
      </figure>
      <p>Time Layer is a spectral looper and time-stretching sampler based on Jean-Francois Charles <a target="_blank" rel="noreferrer" href="https://muse.jhu.edu/issue/13121">A Tutorial on Spectral Sound Processing Using Max/MSP and Jitter</a> published in Computer Music Journal Volume 32, Number 3, Fall 2008.</p>
      <p>The software can be downloaded from github <a target="_blank" rel="noreferrer" href="https://github.com/tmartinez88/Time-Layer/"> here </a> </p>
      <p>listen to some sample audio from the software below.</p>
      <audio controls src={require('../sounds/daycycle.wav')}></audio>
    </article>
  );
}
export default Timelayer;
