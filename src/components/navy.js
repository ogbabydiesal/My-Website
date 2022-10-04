import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import styled from 'styled-components';

const Software = styled.ul`
  padding:0px;
  font-size: calc(2vw + 1px);
  color:black;
  padding-left: 40px;
  text-decoration: none;
  margin:20px;
  margin-top:10px;
  font-style:none !important;
`;

const Descrip = styled.p`
  font-size: calc(1vw + 1px);
  color:black;
  margin-top:-10px;
  margin-bottom:-10px;
  float:center;
`;

const List = styled.li`
  font-style:oblique;
  text-shadow:3px 3px 13px black;
  color:black;
`;

const Navbar= () =>{
  const [inHoverWelcome, setHoverWelcome] = useState(false);
  const [inHoverMusic, setHoverMusic] = useState(false);
  const [inHoverWeb, setHoverWeb] = useState(false);
  const [inHoverDay, setHoverDay] = useState(false);
  const [inHoverRoom, setHoverRoom] = useState(false);
  const [inHoverSoftware, setHoverSoftware] = useState(false);
  const [inHoverImsys, setHoverImsys] = useState(false);
  const [inHoverVeil, setHoverVeil] = useState(false);
  const [inHoverPerc, setHoverPerc] = useState(false);
  const [inHoverLearner, setHoverLearner] = useState(false);
  const [inHoverLayer, setHoverLayer] = useState(false);
  const [inHoverEpigene, setHoverEpigene] = useState(false);
  const [inHoverGithub, setHoverGithub] = useState(false);
  const [inHoverInstagram, setHoverInstagram] = useState(false);
  const [inHoverTwitter, setHoverTwitter] = useState(false);
  
  return (
  <div className='nav'>
    <List>
      <Link className= "navvy2" onMouseEnter={() => setHoverWelcome(true)}
        onMouseLeave={() => setHoverWelcome(false)} to="/home">Welcome</Link>
      {inHoverWelcome ? <span className="greendot"></span> : <span className="graydot"></span> }
    </List>
    <List>
      <Link className= "navvy2" onMouseEnter={() => setHoverMusic(true)}
        onMouseLeave={() => setHoverMusic(false)} to="/music">Music</Link>
      {inHoverMusic ? <span className="greendot"></span> : <span className="graydot"></span>  }
    </List>
    <List>
      <Link className= "navvy2" onMouseEnter={() => setHoverWeb(true)}
        onMouseLeave={() => setHoverWeb(false)} to="/webwork">Web</Link>
      {inHoverWeb ? <span className="greendot"></span> : <span className="graydot"></span>  }
    </List>
    <Software>
    <List>
    <a className= "navvy2" onMouseEnter={() => setHoverDay(true)}
        onMouseLeave={() => setHoverDay(false)} target="_blank" href="https://www.thomasjohnmartinez.com/daycycle">Day Cycle! </a>
      {inHoverDay ? <span className="greendot"></span> : <span className="graydot"></span> }
      
    </List>
    <List>
      <a className= "navvy2" onMouseEnter={() => setHoverRoom(true)}
        onMouseLeave={() => setHoverRoom(false)} target="_blank" href="https://www.thomasjohnmartinez.com/000roomsimulation">Room Sim</a>
        {inHoverRoom ? <span className="greendot"></span> : <span className="graydot"></span> }
    </List>
    </Software>
    <List>
      <Link className= "navvy2" onMouseEnter={() => setHoverSoftware(true)}
        onMouseLeave={() => setHoverSoftware(false)} to="/software">Software</Link>
        {inHoverSoftware ? <span className="greendot"></span> : <span className="graydot"></span> }
    </List>
      <Software>
        <List>
          <Link className= "navvy2" onMouseEnter={() => setHoverImsys(true)}
          onMouseLeave={() => setHoverImsys(false)} to="/imsys">IMSYS</Link>
          {inHoverImsys ? <span className="greendot"></span> : <span className="graydot"></span>}  
        </List>
        <List>
          <Link className= "navvy2" onMouseEnter={() => setHoverVeil(true)}
          onMouseLeave={() => setHoverVeil(false)} to="/veil">Veil</Link>
          {inHoverVeil ? <span className="greendot"></span> : <span className="graydot"></span>}   
        </List>
        <List>
          <Link className= "navvy2" onMouseEnter={() => setHoverPerc(true)} 
          onMouseLeave={() => setHoverPerc(false)} to="/tripleperc">Triple Perc</Link>
          {inHoverPerc ? <span className="greendot"></span> : <span className="graydot"></span>}  
        </List>
        <List>
          <Link className= "navvy2" onMouseEnter={() => setHoverLearner(true)}
          onMouseLeave={() => setHoverLearner(false)} to="/rtlearner">RTLEARNER</Link>
          {inHoverLearner ? <span className="greendot"></span> : <span className="graydot"></span>}  
        </List>
        <List>
          <Link className= "navvy2" onMouseEnter={() => setHoverLayer(true)}
          onMouseLeave={() => setHoverLayer(false)} to="/timelayer">Time Layer</Link>
          {inHoverLayer ? <span className="greendot"></span> : <span className="graydot"></span>}
        </List>
        {/*
        <List>
          <Link onMouseEnter={() => setHoverEpigene(true)}
          onMouseLeave={() => setHoverEpigene(false)} to="/epigene">Epigene</Link>
          {inHoverEpigene ? <span className="greendot"></span> : <span className="graydot"></span>}
        </List>
        */}
      </Software>
      {/* 
      <List>
      <Link onMouseEnter={() => setHoverMusic(true)}
        onMouseLeave={() => setHoverMusic(false)} to="/music">Organizor</Link>
      {inHoverMusic ? <span className="greendot"></span> : <span className="graydot"></span>  }
    </List>
    */}
    <List>
        <a className= "navvy2" onMouseEnter={() => setHoverGithub(true)}
        onMouseLeave={() => setHoverGithub(false)} target = "_blank" href="https://github.com/tmartinez88">github</a>
        {inHoverGithub ? <span className="greendot"></span> : <span className="graydot"></span>}
    </List>
    <List>
      <a className= "navvy2" onMouseEnter={() => setHoverInstagram(true)}
      onMouseLeave={() => setHoverInstagram(false)} target = "_blank" href="https://www.instagram.com/ogbabydiesal/">instagram</a>
      {inHoverInstagram ? <span className="greendot"></span> : <span className="graydot"></span>}
    </List>
    <List>
      <a className= "navvy2" onMouseEnter={() => setHoverTwitter(true)}
      onMouseLeave={() => setHoverTwitter(false)} target = "_blank" href="https://twitter.com/ogbabydiesal">twitter</a>
      {inHoverTwitter ? <span className="greendot"></span> : <span className="graydot"></span>}
    </List>

  </div>
  );
}
export default Navbar;
