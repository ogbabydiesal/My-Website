import React from 'react';
const Sculpture = () =>{
  return (
    <div className = "main">
      <div className='overflowMain'>
        <img src={require('../images/brownBox.png')}/>
        <img src={require('../images/blueBox.png')}/>
        <img src={require('../images/twoBoxes.png')}/>
        <p>Music Boxes (Brown)</p>
        <p>Glass, electronics, generative audio composition (2023)</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/zT5sJkkmbbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <p>Music Boxes (Blue)</p>
        <p>Glass, electronics, generative audio composition (2023)</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Py3qcZE5zW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}
export default Sculpture;
