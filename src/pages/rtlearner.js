import React from 'react';
const RTLEARNER = () =>{
  return (
    <article>
        <h1>RTLEARNER</h1>
        <figure>
          <img style = {{width:'50%'}} src={require('../images/RTLEARNER_PIC.png')} alt="" />
        </figure>
        <p>RTLEARNER is a machine learning for audio classifier. It bridges a scikit-learn Python environment and Max MSP via the UDP networking protocol in order to create classifications on audio descriptors in real-time.</p>
        <p>Presented at the New York <a target="_blank" rel="noreferrer" href="https://forum.ircam.fr/projects/detail/rtlearner/">IRCAM FORUM</a> in 2022</p>
        <p>You will find the software and more information in the <a href="https://github.com/tmartinez88/RTLEARNER" target="_blank" rel="noreferrer">Github repo</a> here.</p>
    </article>
  );
}
export default RTLEARNER;
