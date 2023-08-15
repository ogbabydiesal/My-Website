import React from 'react';
const Music = () =>{
  return (
  <article>
      <h1>Music</h1>
      <section>
        <h3>live set on <a href="https://www.youtube.com/watch?v=H0iwGVKfe0k&ab_channel=DustRadio" target="_blank" rel="noreferrer"> Dust</a></h3>
        <figure>
          <img src={require('../images/dust.png')} alt="" />
        </figure>
      </section>
      <section>
      <h3>Integrity Protocol / Lower Limb Lecture in collaboration with American Artist. <a href="https://www.ninaprotocol.com/8y9QheM5iKGT8ka9z1ZrTzQuhRqXQL77q2kt4kAcu169" target="_blank" rel="noreferrer">Stream and Collect on Nina Protocol</a>
      </h3>
      <iframe src="https://dev.ninaprotocol.com/embed/release/8y9QheM5iKGT8ka9z1ZrTzQuhRqXQL77q2kt4kAcu169" width="400px" height="400px" frameborder="0" />
      </section>
      <section>
      <h3>original mix on <a href="https://www.mixcloud.com/otherdesertradio/tommy-martinez-special-set-august-22-2022/" target="_blank" rel="noreferrer">Other Desert Radio</a>
      </h3>
      <figure>
        <img src={require('../images/odr.jpg')} alt="" />
      </figure>
      </section>
      <section>
        <h3>live performance at <a href="https://pageant.space/" target="_blank" rel="noreferrer"> Pageant</a></h3>
        <figure>
          <img src={require('../images/pag.JPG')} alt="" />
          <figcaption>poster by Alexa West</figcaption>
        </figure>
      </section>
      <section>
        <h3>live performance at Performance Space New York</h3>
        <figure>
          <img src={require('../images/220320TommySpannMano333.jpg')} alt="" />
          <figcaption>poster by Maxine de las Pozas</figcaption>
        </figure>
      </section>
    </article>
  );
}
export default Music;
