import React from 'react';
const Timelayer = () =>{
  return (
    <div className="main"> 
      <img src={require('../images/timeLayer.png')}/>
      <br></br>
      <br></br>
      <p>Time Layer is a spectral looper, and time-stretcher based on Jean Francois Charles </p>
      <p>coming to github soon :)</p>
      <br></br>
      <audio controls src={require('../sounds/daycycle.wav')}>
        
      </audio>
      
    </div>
  );
}
export default Timelayer;
