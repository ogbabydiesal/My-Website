import Markdown from 'react-markdown'

import remarkYoutube from 'remark-youtube';

function Modal({ isOpen, onClose, markdownString }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>[ close - x ]</button>
        <br />
        <br />
        <Markdown remarkPlugins={[[remarkYoutube, { width: '100%', height: '320px' }]]}>{markdownString}</Markdown>
      </div>
    </div>
  );
}

export default Modal;