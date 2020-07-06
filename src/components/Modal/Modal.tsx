import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: `rgba(0, 0, 0, .5)`,
    zIndex: 1000,
  },
  content: {
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#333',
    margin: '0 auto',
    maxWidth: 400,
    maxHeight: 400,
    border: 'none',
    borderRadius: '4px'
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({
  isOpen,
  onRequestClose,
  children
}: Props) => {

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      {children}
    </ReactModal>
  );
};

interface Props extends ReactModal.Props {
  children: React.ReactNode;
}
