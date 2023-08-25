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
          {isExpanded ? 'Ryan Kuo: Puzzle (2022)' : 'Ryan Kuo: Puzzle (2022)'}
      </h4>
      <div {...getCollapseProps()}>
        <div className="my-6">
            {props.children}
        </div>
      </div>
    </div>
    );
  }
const PUZZLE = () =>{
  return (
   <>
   <Collapse>
   <p>Web Programming, Canvas API, Tiling Algorithm, Git, Generative</p>
      <figure>
        <img src={require('../images/puzzle.png')} alt=""/>  
      </figure>
      
      <p><a href="https://taroface.github.io/puzzle/" target='_blank' referrer='no-referrer'>View the work here</a>.</p>
      <p>Below text from the <a href="https://www.mplus.org.hk/en/exhibitions/puzzle-ryan-kuo/" target="_blank" referrer="norefferer">M+ website</a>.</p>
      <p className='italic'>Puzzle is a new work commissioned by M+. It is a program that places interlocking graphical tiles, accompanied by circular dialogues, endlessly in a browser. The work is intrinsically bilingual and its single interactive feature is a language toggle that permits different views of the situation. The situation travels forward and backward in time, accumulating a picture that enables one to glimpse the forces that govern certain beliefs and breakdowns.</p>   
      <p className='italic'>Inspired by role-playing video games, Ryan Kuo’s Puzzle rebuilds conversations from his personal history as a first-generation Taiwanese American growing up in rural America. In looping, disembodied encounters, themes of diaspora emerge. Chinese values such as Confucian patriarchy and filial piety encounter American idealism and self-preservation. Instead of viewing these as opposing forces, Kuo attempts to piece them together across the barriers of memory and language.</p>
      <p className='italic'>Puzzle is durational and is intended for desktop and even larger displays.</p>
      <p className='italic'>The work was co-curated by Kate Gu and Kerry Doran. Translation by Yuling Zhong. Web development by Tommy Martinez.</p>
    </Collapse>
    </>
  );
}
export default PUZZLE;
