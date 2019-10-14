import React from 'react';
import PropTypes from 'prop-types';
import Text from './components/Text';
import Mask from './components/Mask';
import Button from './components/Button';

const Input = ({ type, ...props }) => {
  switch (type) {
    case 'text':
      return <Text {...props} />;
    case 'mask':
      return <Mask {...props} />;
    case 'button':
      return <Button {...props} />;
    default:
      return <p>WIP</p>;
  }
};

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'mask',
    'phone',
    'submit',
    'button',
  ]).isRequired,
};

export default Input;
