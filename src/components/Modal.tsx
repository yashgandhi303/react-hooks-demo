import React, {useEffect, useRef, FunctionComponent, ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface IProps {
  children: ReactNode;
  styles?: React.CSSProperties;
}

const modalRoot = document.getElementById('modal-root');

const Modal: FunctionComponent<IProps> = ({styles, children}) => {
  const elRef = useRef(document.createElement('div'));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div style={styles}>{children}</div>, elRef.current);
};

export default Modal;
