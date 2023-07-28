import React from 'react';
import PUZZLE from './kuo-puzzle';
import CFI from './seu-cfi';

const Systems = () =>{
  return (
    <article>
      <h1>Systems</h1>
      <p>Collaborative and Technological Consulting, Web Programming, Physical Computing and Systems Design. From 2010 to now. Click for more info.</p>
      <ul className="list-none">
        <li><PUZZLE/></li>
        <li><CFI/></li>
      </ul>
    </article>
  );
}
export default Systems;
