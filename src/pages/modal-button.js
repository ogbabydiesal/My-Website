import * as React from 'react';

export default function ModalButton(closeState  ) {
    const [isOpen, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!isOpen);
  };
    return (
        <>
        <div>
            <button onclick = {handleClick}></button>
        </div>
        
        </>
    );
}

