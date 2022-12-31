import React from 'react';
import useCollapse from "react-collapsed";

function Collapse(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Software for Artists Day 7 (2022)' : 'Software for Artists Day 7 (2022)'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
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
      <img className="photo" src={require('../images/s4ad-7.webp')}/>  
      <p>Curated by myself and presented by <a className="linky" target="_blank" href="www.pioneerworks.org">Pioneer Works</a></p>   
      <p>Design by Jesse Johanning</p>
      <p>Featuring presentations by LD Deutsch, Mindy Seu, Jace Clayton, Brian Droitcour, Steve Pikelny, Ruby Justice Thelot and Libby Marrs.</p>
      
    </Collapse>
      </>
  );
}
export default S4AD7;
