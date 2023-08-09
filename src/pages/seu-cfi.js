import React, { useState } from 'react';
import useCollapse from "react-collapsed";

function Collapse(props) {
  const [isExpanded, setExpanded] = useState(true);
  const { getCollapseProps, getToggleProps} = useCollapse({ isExpanded });
  return (
    <div className="collapsible">
        <h4 className="m-0 not-prose" {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}>
            {isExpanded ? 'Augmented reality application for Mindy Seu\'s: Cyberfeminism Index (2022)' : 'Augmented reality application for Mindy Seu\'s: Cyberfeminism Index (2022)'}
        </h4>
        <div {...getCollapseProps()}>
            <div className="my-6">
                {props.children}
            </div>
        </div>
    </div>
    );
  }
const CFI = () =>{
  return (
  <>
    <Collapse>
      <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/7VI57Zwf8QA?start=814" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p><a href="https://tour.cyberfeminismindex.com/" target='_blank' referrer='noreferrer'>Visit the Site</a></p>
      <p>I worked with Mindy to create a desktop augmented reality application for live presentations of the Cyberfeminism Index. Performances with the application have been presented by New Museum with Rhizome (<a href="https://rhizome.org/editorial/2022/nov/30/the-power-of-spreadsheets-watch-the-cyberfeminism-index-book-launch/" target="_blank" referrer="noreferrer">documentation available here</a>), The Graham Foundation (<a href="https://youtu.be/5Nfd6Rah92E?t=1069" target="_blank" referrer="noreferrer">documentation available here</a>), and the Hammer Museum (<a href="https://channel.hammer.ucla.edu/video/1795/cyberfeminism-index-nora-khan-lauren-lee-mccarthy-mindy-seu" target="_blank" referrer="noreferrer">documentation available here</a>) among others.</p>
      <p>CYBERFEMINISM INDEX</p>
      <p>by Mindy Seu</p>
      <p>The internet is not only a network of cables, servers, and computers. It is an environment that shapes and is shaped by its inhabitants and their use. Edited by designer, professor, and researcher Mindy Seu, CYBERFEMINISM INDEX includes more than 700 short entries of radical techno-critical activism, academic articles, hackerspaces, software education, net art, and more. Both a vital introduction for laypeople and a robust resource guide for educators, CYBERFEMINISM INDEX—an anti-canon, of sorts—celebrates and makes visible cyberfeminism’s long-ignored origins and its expansive legacy.</p>
      <p>CYBERFEMINISM INDEX is published by Inventory Press and distributed by Distributed Art Publishers and generously funded by the Graham Foundation for Advanced Studies in the Fine Arts, Rhizome, and Feral File, and is made possible in part by the Rutgers University Research Council, Pratt Institute, Pioneer Works, and Cita Press.</p>
    </Collapse>
  </>
  );
}
export default CFI;
