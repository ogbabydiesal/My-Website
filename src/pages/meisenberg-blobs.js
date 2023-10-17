import React, { useState } from 'react';
import useCollapse from "react-collapsed";

function Collapse(props) {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className="collapsible">
      <h4 className="m-0 not-prose" {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
          {isExpanded ? 'Florian Meisenberg: Delivery to the Following Recipients Failed Permanently (2015)' : 'Florian Meisenberg: Delivery to the Following Recipients Failed Permanently (2015)'}
      </h4>
      <div {...getCollapseProps()}>
        <div className="my-6">
            {props.children}
        </div>
      </div>
    </div>
    );
  }
const BLOBS = () =>{
  return (
   <>
   <Collapse>
   <p>3D programming for a realtime 2-channel simulation in Max/MSP Jitter for Florian Meisenberg at Simone Subal. The piece connects to open 3D model databases on the web and downloads objects at random, then renders them in the animation.</p>
      <figure>
        <img src={require('../images/delivery1.jpeg')} alt=""/>  
      </figure>
      <figure>
        <img src={require('../images/delivery2.jpeg')} alt=""/>  
      </figure>
      <figure>
        <img src={require('../images/delivery3.jpeg')} alt=""/>  
      </figure>
      <figure>
        <img src={require('../images/delivery4.jpeg')} alt=""/>  
      </figure>
      <figure>
        <img src={require('../images/delivery5.webp')} alt=""/>  
      </figure>
      <figure>
        <img src={require('../images/delivery6.webp')} alt=""/>  
      </figure>
      <figure>
        <img src={require('../images/delivery7.webp')} alt=""/>  
      </figure>
      
      <p><a href="https://simonesubal.com/exhibitions/florian-meisenberg-delivery" target='_blank' referrer='no-referrer'>View the work here</a>.</p>
      <iframe src="https://player.vimeo.com/video/121201368?h=bece6ee2fd" width="640" height="337" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      <p><a href="https://vimeo.com/121201368">Delivery to the following recipients failed permanently (I used to be with it, but then they changed what &lsquo;it&rsquo; was, and...</a> from <a href="https://vimeo.com/florianmeisenberg">Florian Meisenberg</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
      <p>Press</p>
      <ul>
        <li><a href="https://www.artforum.com/events/florian-meisenberg-210294/">Artforum</a></li>
        <li><a href="https://pioneerworks.org/broadcast/password-protected-florian-meisenberg">Pioneer Works</a></li>
        <li><a href="./docs/FM-ArtInfo-March-2015.pdf" target="_blank">Art Info</a></li>
        <li><a href="https://pioneerworks.org/broadcast/password-protected-florian-meisenberg">Artforum</a></li>
      </ul>
    </Collapse>
    </>
  );
}
export default BLOBS;
