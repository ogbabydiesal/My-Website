import React from 'react';
import useCollapse from "react-collapsed";

function Collapse(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Software for Artists Book: Building Better Realities (2020)' : 'Software for Artists Book: Building Better Realities (2020)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
    );
  }
const S4AB = () =>{
  return (
   <>
   <Collapse>
      <img className="photo" src={require('../images/S4AB_SPREADS_SQUARE.png')}/>  
      <p>Curated by myself and edited by <a target="_blank" href="www.willakoerner.com">Willa Köerner</a>, in collaboration with <a target="_blank" href="www.are.na">Arena</a> and published by <a target="_blank" href="www.pioneerworks.org">Pioneer Works Press</a></p>   
      <p>Design by Daniel Kent</p>
      <p>Featuring contributions from Salome Asega, Stephanie Dinkins, Grayson Earle, ann haeyoung, Rindon Johnson, Ryan Kuo, and Tsige Tafesse — plus 47 Digital Diary entries from our community</p>
      <p><span style={{ fontWeight:'bold' }}>About Software for Artists Book series</span></p>
      <p>Driven by a desire to challenge existing frameworks and present creative alternatives, the Software for Artists Book series explores our complex and often slippery relationships with new technologies. Each book features the voices of critically engaged artists, researchers, writers, and organizers who are working at the forefront of the web, virtual embodiment, decentralized networks, AI, and beyond.</p>
      <p>Order the book <a target="_blank" href="https://pioneerworks.org/store/software-for-artists-book">here (currently out of stock)</a></p>
      <p>Download the free PDF<a target="_blank" href="https://pioneerworks.org/store/software-for-artists-book">here</a></p>
      <img className="photo" src={require('../images/S4AB_SPREADS_SQUARE2.png')}/>
    </Collapse>
      </>
  );
}
export default S4AB;
