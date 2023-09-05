import React, { useState } from 'react';
import useCollapse from "react-collapsed";
import { InstagramEmbed } from 'react-social-media-embed';


function Collapse(props) {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    <div className="collapsible">
      <h4 className="m-0 not-prose" {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
          {isExpanded ? 'Martine Syms: Mythiccbbeing (2018)': 'Martine Syms: Mythiccbbeing (2018)'}
      </h4>
      <div {...getCollapseProps()}>
        <div className="my-6">
            {props.children}
        </div>
      </div>
    </div>
    );
  }
const MYTHICC = () =>{
  return (
   <>
   <Collapse>
      <p>Max, Chatbot, Multichannel Video, Sockets</p>
      <p><a href="https://www.bridgetdonahue.nyc/exhibitions/martine-syms/" target='_blank' referrer='noreferrer'>Visit the project at Bridget Donahue Gallery</a></p>
      <p>Mythiccbbeing was first produced for Martine's second solo show at Bridget Donahue Gallery in 2018. The technical aspect of the installation consisted of a multichannel audio visual playback triggered via interaction with an sms (text-message) based chatbot named Teeny. I oversaw all technical systems and acted as the sole programmer for interactive video playback engine. Angeline Meitzler acted as chatbot programmer.</p>
      <p>A nice description of the piece can be found at the bottom of this <a href="https://www.sleek-mag.com/article/martine-syms-2019/" target="_blank" referrer="noreferrer">article in Sleek</a>.</p>
      <figure>
        <img src={require('../images/mythicc1.jpg')} alt="" />  
      </figure>
      <figure>
        <img src={require('../images/mythicc2.jpg')} alt="" />  
      </figure>
      <figure>
        <img src={require('../images/mythicc3.jpg')} alt="" />  
      </figure>
      <figure>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <InstagramEmbed url="https://www.instagram.com/p/Bpfc0ofFroF/?img_index=1" width={328} />
        </div>
      </figure>
      <figure>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <InstagramEmbed url="https://www.instagram.com/p/Bo7akJrhFqE/?img_index=2" width={328} />
        </div>
      </figure>
      <figure>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <InstagramEmbed url="https://www.instagram.com/p/BoXzG1pnYky/?img_index=1" width={328} />
        </div>
      </figure>
      <figure>
        <div style={{ display: 'flex', justifyContent: 'left' }}>
          <InstagramEmbed url="https://www.instagram.com/p/BoMyNWqB2Y0/?img_index=2" width={328} />
        </div>
      </figure>
      
      <p className='underline'>Press</p>
      <ul>
        <li><a href="https://contemporaryand.com/exhibition/martine-syms-big-surprise/" target="_blank" referrer="noreferrer">C & 10</a></li>
        <li><a href="https://artfacts.net/exhibition/martine-syms-big-surprise/905195" target="_blank" referrer="noreferrer">Art Facts</a></li>
      </ul>
    </Collapse>
    <br></br>
    </>
  );
}
export default MYTHICC;

