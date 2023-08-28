import React from 'react';
import MuxPlayer from "@mux/mux-player-react";


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
          <MuxPlayer
            streamType="public"
            playbackId="URswOkuqUupui019ntPKwLG881yc7ELpSScqydkpv6PY"
            metadata={{
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
          }}
    />
        <figcaption>Glass, electronics, generative audio composition (2023)</figcaption>
        </figure>
        </section>
        <section>
          <h3>Music Boxes (Blue)</h3>
          <figure>
            <figcaption>Glass, electronics, generative audio composition (2023)</figcaption>
          </figure>
        </section>
    </article>
  );
}
export default Sculpture;