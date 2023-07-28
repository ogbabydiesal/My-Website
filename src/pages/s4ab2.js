import React from 'react';
import useCollapse from "react-collapsed";

function Collapse(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <h4 className="m-0 not-prose" {...getToggleProps()}>
            {isExpanded ? 'Software for Artists Book 2: Untethering the Web (2022)' : 'Software for Artists Book 2: Untethering the Web (2022)'}
        </h4>
        <div {...getCollapseProps()}>
            <div className="my-6">
                {props.children}
            </div>
        </div>
    </div>
    );
  }
const S4AB2 = () =>{
  return (
   <>
   <Collapse>
      <figure>
        <img className="photo" src={require('../images/s4ad.png')} alt="" />  
      </figure>
      <p>Co-Edited by myself and <a target="_blank" rel="noreferrer" href="www.willakoerner.com">Willa Köerner</a>, in collaboration with <a target="_blank" rel="noreferrer" href="www.are.na">Arena</a> and published by <a target="_blank" rel="noreferrer" href="www.pioneerworks.org">Pioneer Works Press</a></p>   
      <p>Design by Daniel Kent</p>
      <p>Featuring contributions from Jace Clayton, Aria Dean, Mat Dryhurst, Nora N. Khan, Jenson Leonard, Umber Majeed, Trevor McFedries, Everest Pipkin, Billy Rennekamp, Mindy Seu — plus 32 Digital Diary entries from our community.</p>
      <h5><strong>About Software for Artists Book series</strong></h5>
      <p>Driven by a desire to challenge existing frameworks and present creative alternatives, the Software for Artists Book series explores our complex and often slippery relationships with new technologies. Each book features the voices of critically engaged artists, researchers, writers, and organizers who are working at the forefront of the web, virtual embodiment, decentralized networks, AI, and beyond.</p>
      <p>Order the book <a target="_blank" rel="noreferrer" href="https://pioneerworks.org/store/software-for-artists-book-untethering-the-web">here</a></p>
    </Collapse>
      </>
  );
}
export default S4AB2;
