import React from 'react';
import useCollapse from "react-collapsed";

function Collapse(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <h4 className="m-0 not-prose" {...getToggleProps()}>
            {isExpanded ? 'Augmented reality application Mindy Seu\'s: Cyberfeminism Index (2022)' : 'Augmented reality application Mindy Seu\'s: Cyberfeminism Index (2022)'}
        </h4>
        <div {...getCollapseProps()}>
            <div className="my-6">
                {props.children}
            </div>
        </div>
    </div>
    );
  }
const CFI = () =>{
  return (
   <>
   <Collapse>
      <figure>
        <img className="photo" src={require('../images/CFI.webp')} alt="" />  
      </figure>
      <p>In Cyberfeminism Index, hackers, scholars, artists, and activists of all regions, races and sexual orientations consider how humans might reconstruct themselves by way of technology. When learning about internet history, we are taught to focus on engineering, the military-industrial complex, and the grandfathers who created the architecture and protocol, but the internet is not only a network of cables, servers, and computers. It is an environment that shapes and is shaped by its inhabitants and their use.</p>   
      <p>The creation and use of the Cyberfeminism Index is a social and political act. It takes the name cyberfeminism as an umbrella, complicates it, and pushes it into plain sight. Edited by designer, professor, and researcher Mindy Seu, it includes more than 700 short entries of radical techno-critical activism in a variety of media, including excerpts from academic articles and scholarly texts; descriptions of hackerspaces, digital rights activist groups, and bio-hacktivism; and depictions of feminist net art and new media art.</p>
      <p>I worked with Mindy to develop an AR App for performative reading</p>
    </Collapse>
      </>
  );
}
export default CFI;
