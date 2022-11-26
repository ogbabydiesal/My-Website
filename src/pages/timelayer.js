import React from 'react';
const Timelayer = () =>{
  return (
    <div className="main"> 
      <img src={require('../images/timeLayer.png')}/>
      <br></br>
      <br></br>
      <p>Time Layer is a spectral looper and time-stretching sampler based on Jean-Francois Charles <a target="_blank" href="https://muse.jhu.edu/issue/13121">A Tutorial on Spectral Sound Processing Using Max/MSP and Jitter</a> published in Computer Music Journal Volume 32, Number 3, Fall 2008.</p>
      <br></br>
      <p>The software can be downloaded from github <a target="blank" href="https://github.com/tmartinez88/Time-Layer/"> here </a> </p>
      <br></br>
      <p>listen to some sample audio from the software below.</p>
      <br></br>
      <audio controls src={require('../sounds/daycycle.wav')}>
        
      </audio>
      
    </div>
  );
}
export default Timelayer;
