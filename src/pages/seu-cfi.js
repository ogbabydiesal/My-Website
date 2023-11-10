import React, { useState } from 'react';
import ModalButton from './modal-button';

export default function CFI({ onClose }) {
  return (
    <div class="modal">
      <div>
        <ModalButton state = { onClose }/>
      </div>
      
      <p>Unity, Augmented Reality, Video, Performance</p>
      <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/7VI57Zwf8QA?start=814" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p><a href="https://tour.cyberfeminismindex.com/" target='_blank' referrer='noreferrer'>Visit the Site</a></p>
      <p>I worked with Mindy to create a desktop augmented reality application for live presentations of the Cyberfeminism Index. Performances with the application have been presented by New Museum with Rhizome (<a href="https://rhizome.org/editorial/2022/nov/30/the-power-of-spreadsheets-watch-the-cyberfeminism-index-book-launch/" target="_blank" referrer="noreferrer">documentation available here</a>), The Graham Foundation (<a href="https://youtu.be/5Nfd6Rah92E?t=1069" target="_blank" referrer="noreferrer">documentation available here</a>), and the Hammer Museum (<a href="https://channel.hammer.ucla.edu/video/1795/cyberfeminism-index-nora-khan-lauren-lee-mccarthy-mindy-seu" target="_blank" referrer="noreferrer">documentation available here</a>) among others.</p>
      <p>CYBERFEMINISM INDEX</p>
      <p>by Mindy Seu</p>
      <p>The internet is not only a network of cables, servers, and computers. It is an environment that shapes and is shaped by its inhabitants and their use. Edited by designer, professor, and researcher Mindy Seu, CYBERFEMINISM INDEX includes more than 700 short entries of radical techno-critical activism, academic articles, hackerspaces, software education, net art, and more. Both a vital introduction for laypeople and a robust resource guide for educators, CYBERFEMINISM INDEX—an anti-canon, of sorts—celebrates and makes visible cyberfeminism’s long-ignored origins and its expansive legacy.</p>
      <p>CYBERFEMINISM INDEX is published by Inventory Press and distributed by Distributed Art Publishers and generously funded by the Graham Foundation for Advanced Studies in the Fine Arts, Rhizome, and Feral File, and is made possible in part by the Rutgers University Research Council, Pratt Institute, Pioneer Works, and Cita Press.</p>
      </div>
    );
}


