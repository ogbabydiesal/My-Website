import React from 'react';
const Veil = () =>{
  return (
    <div className="main">
      <img src={require('../images/veilApp.png')}/>
      <p>Veil (2016) is an encryption and spectral processing effect.</p>
      <br></br>
      <p>It applies a monoalphabetic substitution cypher to scramble FFT bins rendering audio recorded with the app unintelligible without a user generated decryption key.</p>
      <p>The codebase for the project can be found <a className = "link" target = "_blank" href="https://github.com/tmartinez88/Veil">here</a>.</p>
      
    </div>
  );
}
export default Veil;
