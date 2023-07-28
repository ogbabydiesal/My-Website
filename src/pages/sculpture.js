import React from 'react';
const Sculpture = () =>{
  return (
    <article>
        <h1>Sculpture</h1>
        <section>
        <h3>Music Boxes (Brown)</h3>
        <figure>
          <img src={require('../images/brownBox.png')} alt="" />
          <img src={require('../images/blueBox.png')} alt="" />
          <img src={require('../images/twoBoxes.png')} alt="" />
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/zT5sJkkmbbY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <figcaption>Glass, electronics, generative audio composition (2023)</figcaption>
        </figure>
        </section>
        <section>
          <h3>Music Boxes (Blue)</h3>
          <figure>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/Py3qcZE5zW0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <figcaption>Glass, electronics, generative audio composition (2023)</figcaption>
          </figure>
        </section>
    </article>
  );
}
export default Sculpture;