import React from 'react';
const Tripleperc = () =>{
  return (
    <div className="main">
      <div className='overflowMain'>
      <img src={require('../images/triplePercLarge.png')}/>
      <br></br>
      <br></br>
      <p>Triple-Perc is a granular sampler inspired by Curtis Roads' <span style={{ fontStyle:'italic' }}>Microsound</span> (2001).</p>
      
      <p>coming to github soon</p>

      <audio controls src={require('../sounds/theempire.wav')}>
        
      </audio>
      </div>
    </div>
  );
}
export default Tripleperc;
