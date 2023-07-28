import React from 'react';
const Tripleperc = () =>{
  return (
    <article className="main">
      <h1>Triple-Perc</h1>
      <figure>
        <img src={require('../images/triplePercLarge.png')}/>
      </figure>
      <p>Triple-Perc is a granular sampler inspired by Curtis Roads' <span style={{ fontStyle:'italic' }}>Microsound</span> (2001).</p>
      <p>coming to github soon</p>
      <audio controls src={require('../sounds/theempire.wav')}></audio>
    </article>
  );
}
export default Tripleperc;
