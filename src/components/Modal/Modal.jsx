import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onToggle }) {
  // custom add/remove event listener for keydown:
  useEffect(function setUpListener() {
    window.addEventListener('keydown', handleKeyDown);
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        onToggle();
      }
    }

    return function cleanUpKeyDown() {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onToggle();
    }
  };

  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">{children}</div>
    </div>,
    modalRoot
  );
}
