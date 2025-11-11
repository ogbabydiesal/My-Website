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
            {isExpanded ? 'Software for Artists Day 7 (2022)' : 'Software for Artists Day 7 (2022)'}
        </h4>
        <div {...getCollapseProps()}>
            <div className="my-6">
                {props.children}
            </div>
        </div>
    </div>
    );
  }
const S4AD7 = () =>{
  return (
   <>
   <Collapse>
      <figure>
        <img className="photo" src={require('../images/s4ad-7.webp')} alt="" />  
        <figcaption>Design by Jesse Johanning</figcaption>
      </figure>
      <p><a href="https://pioneerworks.org/programs/software-for-artists-day-7" target="_blank" rel="noreferrer">S4AD Website</a></p>
      <p>Curated by myself and presented by <a target="_blank" rel="noreferrer" href="https://www.pioneerworks.org">Pioneer Works</a></p>   
      <p>Featuring presentations by LD Deutsch, Mindy Seu, Jace Clayton, Brian Droitcour, Steve Pikelny, Ruby Justice Thelot and Libby Marrs. With music by Pent, Gobby, and Bergsonist. In collaboration with <a href="https://www.ninaprotocol.com/" target="_blank" referrer="noreferrer">Nina Protocol</a>.</p>
    </Collapse>
      </>
  );
}
export default S4AD7;
