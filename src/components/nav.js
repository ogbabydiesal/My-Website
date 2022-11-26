import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet, Link } from "react-router-dom";
import useCollapse from "react-collapsed";

const Software = styled.ul`
  padding:0px;
  font-size: calc(2vw + 1px);
  color:black;
  padding-left: 20px;
  
  margin:20px;
  margin-top:10px;
  font-style:none !important;
  @media (max-width: 1000px) {
    font-size: calc(3vw + 1px);
    padding-left: 0px;
    margin-top: 10px;
    
  }
`;

const Descrip = styled.p`
  font-size: calc(2vw + 1px);
  color:black;
  margin-top:-10px;
  margin-bottom:-10px;
  float:center;
`;

const List = styled.li`
  color:black;
`;

function CollapseWeb(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Web Work' : 'Web Work'}
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              {props.children}
          </div>
      </div>
  </div>
  );
}
function CollapseSoftware(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Software' : 'Software'}
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
              {props.children}
          </div>
      </div>
  </div>
  );
}

const Navbar= () =>{
  return (
    <>
  <nav className='nav'>
    <ul>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/music">Music</Link>
      </li>
      <CollapseWeb>
          <Software>
            <List>
            <a target="_blank" href="https://www.thomasjohnmartinez.com/daycycle">Day Cycle</a>
                 
            </List>
            <List>
            <a target="_blank" href="https://thomasjohnmartinez.com/someclusters/">Some Clusters</a>
                 
            </List>
            <List>
              <a target="_blank" href="https://www.thomasjohnmartinez.com/000roomsimulation">Room Sim</a>
            </List>

            <List>
              <a target="_blank" href="https://www.thomasjohnmartinez.com/septet-structure-a">Septet Structure - A</a>
            </List>
        </Software>
      </CollapseWeb>
    <CollapseSoftware>
      <Software>
        <List>
            <Link to="/imsys">IMSYS</Link>  
        </List>
        <List>
            <Link to="/veil">Veil</Link>  
        </List>
        <List>
            <Link to="/tripleperc">Triple Perc</Link>  
        </List>
        <List>
            <Link to="/rtlearner">RTLEARNER</Link> 
        </List>
        <List>
            <Link to="/timelayer">Time Layer</Link>
        </List>
      </Software>
    </CollapseSoftware>
    <li>
        <Link to="/organizing">Organizing</Link>
      </li>
      <li>
        <Link to="/systems">Systems</Link>
      </li>
    <List>
        <a target = "_blank" href="https://github.com/tmartinez88">github</a>
    </List>
    <List>
      <a target = "_blank" href="https://www.instagram.com/ogbabydiesal/">instagram</a>
    </List>
    <List>
      <a target = "_blank" href="https://twitter.com/ogbabydiesal">twitter</a>
    </List> 
    
    </ul>
  </nav>
  <Outlet />
  </>
  )
};
export default Navbar;
