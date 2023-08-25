import React from 'react';
import PUZZLE from './kuo-puzzle';
import CFI from './seu-cfi';
import BLUE from './artist-blue';
import GOGGLES from './bennani-goggles';
import MYTHICC from './syms-mythiccbeing';
const Systems = () =>{
  return (
    <article>
      <h1>Systems</h1>
      <p>Since 2010 I have worked closely with artists to create one of a kind interactive systems for performances and installation. </p>
      <ul>
        <li><PUZZLE/></li>
        <li><CFI/></li>
        <li><BLUE/></li>
        <li><GOGGLES/></li>
        <li><MYTHICC/></li>
      </ul>
    </article>
  );
}
export default Systems;
