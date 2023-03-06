import React from 'react';
import PUZZLE from './kuo-puzzle';
import CFI from './seu-cfi';

const Systems = () =>{
  return (
    <div className="main">
      <p>Collaborative and Technological Consulting, Web Programming, Physical Computing and Systems Design. From 2010 to now. Click for more info.</p>
      <div className='sys'>
        <PUZZLE></PUZZLE>
        <CFI></CFI>
      </div>
      
    </div>
  );
}
export default Systems;
