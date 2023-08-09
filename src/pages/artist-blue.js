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
          {isExpanded ? 'Production and 3D Animation for American Artist (2019)': 'Production and 3D Animation for American Artist (2019)'}
      </h4>
      <div {...getCollapseProps()}>
        <div className="my-6">
            {props.children}
        </div>
      </div>
    </div>
    );
  }
const BLUE = () =>{
  return (
   <>
   <Collapse>
   <iframe src="https://player.vimeo.com/video/522982141?h=2cda0091d5&title=0&byline=0" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      <p><a href="https://americanartist.us/works/im-blue" target='_blank' referrer='noreferrer'>Visit the Site</a></p>
      <p>I acted as a producer and lead technical artist for 'Blue Life Seminar.' I consulted on avatar design, mocap workflow, and animation. The piece was supported by a Pioneer Works Tech Residency which I facilitated during my tenure there.</p>
      <figure>
        <img src={require('../images/bls_install.jpeg')} alt="" />  
      </figure>
      <p className='underline'>Press</p>
      <ul>
        <li><a href="https://www.moma.org/magazine/articles/755" target="_blank" referrer="noreferrer">MoMA Magazine</a></li>
        <li><a href="https://bombmagazine.org/articles/american-artist/" target="_blank" referrer="noreferrer">BOMB Magazine</a></li>
        <li><a href="https://www.artnews.com/art-news/artists/american-artist-12444/" target="_blank" referrer="noreferrer">ARTnews </a></li>
        <li><a href="https://brooklynrail.org/2019/04/artseen/American-Artist-Im-Blue-If-I-Was-I-Would-Die" target="_blank" referrer="noreferrer">The Brooklyn Rail</a></li>
        <li><a href="https://www.artforum.com/picks/american-artist-79001" target="_blank" referrer="noreferrer">Artforum</a></li>
        <li><a href="https://news.artnet.com/art-world/american-artist-blue-lives-matter-1477762" target="_blank" referrer="noreferrer">Artnet</a></li>
      </ul>
    </Collapse>
    </>
  );
}
export default BLUE;

