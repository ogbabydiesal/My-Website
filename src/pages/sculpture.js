import React from 'react';
import MuxPlayer from "@mux/mux-player-react";


const Sculpture = () =>{
  return (
    <article>
        <h1>Sculpture</h1>
        <section>
        <h3>Music Boxes (2022). Stained Spectrum glass, custom electronics, generative music composition.</h3>
        <figure>
          <img src={require('../images/brownBox.png')} alt="" />
          <img src={require('../images/blueBox.png')} alt="" />
          <img src={require('../images/twoBoxes.png')} alt="" />
          <MuxPlayer
            streamType="on-demand"
            primary-color="limegreen"
            title= "Duo"
            playbackId="URswOkuqUupui019ntPKwLG881yc7ELpSScqydkpv6PY"
            metadata={{
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
          }}
          />
          <MuxPlayer
              streamType="on-demand"
              primary-color="limegreen"
              title= "Detail of music boxes"
              playbackId="UP6zabBy0100dcotzVnZsdIdK01smNt5MIa8UZ01QnvDQWg"
              metadata={{
              video_id: "video-id-54321",
              video_title: "Test video title",
              viewer_user_id: "user-id-007",
            }}
            />
          </figure>
          <h3>Chimes (2023)</h3>
          <figure>
            <MuxPlayer
              streamType="on-demand"
              primary-color="limegreen"
              title= "Ayano's Chime"
              playbackId="vp4n4U9OcGFXzVsVRkVSGcok2O4bbda8M7kcQJHHBu00"
              metadata={{
              video_id: "video-id-54321",
              video_title: "Test video title",
              viewer_user_id: "user-id-007",
            }}
            />
            <MuxPlayer
              streamType="on-demand"
              primary-color="limegreen"
              title= "Gift for Kevin"
              playbackId="XPbPJz46AmqD68tvKCxs6rRydJZqtvp6TbtinW3buco"
              metadata={{
              video_id: "video-id-54321",
              video_title: "Test video title",
              viewer_user_id: "user-id-007",
            }}
            />
            <MuxPlayer
              streamType="on-demand"
              primary-color="limegreen"
              title= "Gepetto's Hand"
              playbackId="XhA5B5e9TvDMqh00rl01D1Qmu1FG02BCrIG02BYfzi4Z7z4"
              metadata={{
              video_id: "video-id-54321",
              video_title: "Gepetto's Chime",
              viewer_user_id: "user-id-007",
              
            }}
            />
          </figure>
        </section>
    </article>
  );
}
export default Sculpture;