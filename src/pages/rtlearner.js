import React from 'react';
const RTLEARNER = () =>{
  return (
    <div className = "main">
      <br></br>
      <img style = {{width:'50%'}} src={require('../images/RTLEARNER_PIC.png')}/>
      <br></br>
      <br></br>
      <p>RTLEARNER is a machine learning for audio classifier. It bridges a scikit-learn Python environment and Max MSP via the UDP networking protocol in order to create classifications on audio descriptors in real-time.</p>
      <p>Presented at the New York <a className="linky" target="_blank" href="https://forum.ircam.fr/projects/detail/rtlearner/">IRCAM FORUM</a> in 2022</p>
      <p>You will find the software and more information in the <a className="linky" href="https://github.com/tmartinez88/RTLEARNER" target="_blank">Github repo</a> here.</p>
      <br></br>
      <br></br>
    </div>
  );
}
export default RTLEARNER;
