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
          {isExpanded ? 'Meriem Bennani: Neighborhood Goggles (2019)' : 'Meriem Bennani: Neighborhood Goggles (2019)'}
      </h4>
      <div {...getCollapseProps()}>
        <div className="my-6">
            {props.children}
        </div>
      </div>
    </div>
    );
  }
const GOGGLES = () =>{
  return (
   <>
   <Collapse>
    <p>Interaction Design, Physical Computing, Serial Communication, Multichannel Video, Max</p>
      <figure>
        <img src={require('../images/goggles.jpeg')} alt="" />  
      </figure>
      <p><a href="http://www.c-l-e-a-r-i-n-g.com/exhibitions/works-from-mission-teens/" target='_blank' referrer='no-referrer'>View the work at Clearing Gallery</a>.</p>
      <p>Originally produced for the 2019 Whitney Biennial, I worked with Meriem to devise and program a fun two person video playback system in Max.</p>
      <figure>
        <img src={require('../images/goggles2.jpeg')} alt="" />  
      </figure>
      <p><a href="https://whitney.org/media/43428" target='_blank' referrer='no-referrer'>View the work at Whitney Museum of American Art</a>.</p>
      <figure>
        <img src={require('../images/goggles3.webp')} alt="" />  
      </figure>
      <figure>
        <img src={require('../images/goggles4.jpeg')} alt="" />  
      </figure>
    </Collapse>
    </>
  );
}
export default GOGGLES;
