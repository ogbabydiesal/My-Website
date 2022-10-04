import React from 'react';
const Tripleperc = () =>{
  return (
    <div className="main"> 
      <img src={require('../images/triplePercLarge.png')}/>
      <br></br>
      <br></br>
      <p>Triple-Perc is a granular sampler</p>
      <p>coming to github soon :)</p>
      <br></br>
      <audio controls src={require('../sounds/theempire.wav')}>
        
      </audio>
      
    </div>
  );
}
export default Tripleperc;
