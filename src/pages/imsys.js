import React from 'react';
const Imsys = () =>{
  return (
    <article>
      <h1>IMSYS</h1>
      <figure>
        <img src={require('../images/imsys1.png')} alt="" />
      </figure>
      <p>IMSYS is a spectral spatialization tool.</p>
      <p>Working on getting this on github.</p>
      <ul>
      <li>
        <a href="https://ccrma.stanford.edu/events/imsys-spectral-panning-flocking-algorithms-in-multichannel-sound-environment" target="_blank" rel="noreferrer">CCRMA Presentation</a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=evg-l_ZhKA8&ab_channel=ccrmalite1" target="_blank" rel="noreferrer">CCRMA Video</a>
      </li>
      <li>
        <a href="https://cnmat.berkeley.edu/events/imsys-spectral-panning-flocking-algorithms-multi-channel-sound-environment-tommy-martinez?fbclid=IwAR2DXKfMArZxRFnE8FyFEzjAkakWzurgZtDDuLlFust4fkqf2W7TC03lPws" target="_blank" rel="noreferrer">CNMAT Presentation</a>
      </li>
      </ul>
    </article>
  );
}
export default Imsys;
