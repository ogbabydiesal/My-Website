import React from 'react';
const Music = () =>{
  return (
    <div className = "main">
      <div className = "overflowMain">
        <p>live set on <a className="linky" href="https://www.youtube.com/watch?v=H0iwGVKfe0k&ab_channel=DustRadio" target='_blank'> Dust</a></p>
        <img src={require('../images/dust.png')}/>
      <br></br>
      <div>
        <p>original mix on <a className="linky" href="https://www.mixcloud.com/otherdesertradi0/tommy-martinez-special-set-august-22-2022/" target='_blank'> Other Desert Radio</a></p>
        <img src={require('../images/odr.jpg')}/>
      </div>
      <br></br>
      <div>
        <p>live performance at <a className="linky" href="https://pageant.space/" target='_blank'> Pageant</a></p>
        <p>poster by Alexa West</p>
        <img src={require('../images/pag.JPG')}/>
      </div>
      <br></br>
      <div>
        <p>live performance at Performance Space New York</p>
        <p>poster by Maxine De La Pozas</p>
        <img src={require('../images/220320TommySpannMano333.jpg')}/>
      </div>
      </div>
    </div>
  );
}
export default Music;
