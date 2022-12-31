import React from 'react';
const Music = () =>{
  return (
    <div className = "main">
      <br></br>
      <div>
        <p>live set on <a className="linky" href="https://www.youtube.com/watch?v=H0iwGVKfe0k&ab_channel=DustRadio" target='_blank'> Dust</a></p>
        <img src={require('../images/dust.png')}/>
      </div>
      <br></br>
      <div>
        <p>original mix on <a className="linky" href="https://www.mixcloud.com/otherdesertradi0/tommy-martinez-special-set-august-22-2022/" target='_blank'> Other Desert Radio</a></p>
        <img src={require('../images/odr.jpg')}/>
      </div>
    </div>
  );
}
export default Music;
