import React, { useState } from 'react';


export default function GOGGLES({ onClose }) {
  return (
    <div class="modal">
      <div>
        <button class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900" onClick={onClose}>Close</button>
        <p>Interaction Design, Physical Computing, Serial Communication, Multichannel Video, Max</p>
        <figure>
          <img src={require('../images/goggles.jpeg')} alt="" />  
        </figure>
        <p><a href="http://www.c-l-e-a-r-i-n-g.com/exhibitions/works-from-mission-teens/" target='_blank' referrer='no-referrer'>View the work at Clearing Gallery</a>.</p>
        <p>Originally produced for the 2019 Whitney Biennial, I worked with Meriem to devise and program a fun two person video playback system in Max.</p>
        <figure>
          <img src={require('../images/goggles2.jpeg')} alt="" />  
        </figure>
        <p><a href="https://whitney.org/media/43428" target='_blank' referrer='no-referrer'>View the work at Whitney Museum of American Art</a>.</p>
        <figure>
          <img src={require('../images/goggles3.webp')} alt="" />  
        </figure>
        <figure>
          <img src={require('../images/goggles4.jpeg')} alt="" />  
        </figure>
      </div>
    </div>
  );
}
