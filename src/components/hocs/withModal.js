import React from 'react';
import Modal from '../molecules/Modal';

export default (Component) => props => {
  return (
    <>
      <Modal />
      <Component {...props} />
    </>
  );
};
