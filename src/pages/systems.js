import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import PUZZLE from './kuo-puzzle';
import CFI from './seu-cfi';
import BLUE from './artist-blue';
import GOGGLES from './bennani-goggles';
import MYTHICC from './syms-mythiccbeing';
import BLOBS from './meisenberg-blobs';
import VOMITORIUM from './vomitorium';


export default function SYSTEMS() {
  const modals = [];
  
  const [showMythiccModal, setShowMythiccModal] = useState(false);
  return (
    <>
      <article >
        <h1>Systems</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <div><img src={require('../images/mythicc3.jpg')} alt="" onClick={() => setShowMythiccModal(true)} />
          {showMythiccModal && createPortal(
        <MYTHICC onClose={() => setShowMythiccModal(false)} />,
        document.body
      )}</div>
          <div><img src={require('../images/delivery1.jpeg')} alt="" /></div>
          <div><img src={require('../images/goggles.jpeg')} alt="" /></div>
          <div><img src={require('../images/CFI.webp')} alt="" /></div>
          <div><img src={require('../images/bls.jpg')} alt="" /></div>
          <div><img src={require('../images/puzzle.png')} alt="" /></div>
        </div>
      </article>
    </>
  );
}


