import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ styles, children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    }
  }, []);

  return createPortal(
    <div style={styles}>
      {children}
    </div>,
    elRef.current
  );
};

export default Modal;
