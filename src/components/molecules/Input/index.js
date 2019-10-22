import React from 'react';
import PropTypes from 'prop-types';
import Text from './components/Text';
import Mask from './components/Mask';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Plain from './components/Plain';

const Input = ({ type, ...props }) => {
  switch (type) {
    case 'text':
      return <Text {...props} />;
    case 'mask':
      return <Mask {...props} />;
    case 'button':
      return <Button {...props} type="submit" />;
    case 'checkbox':
      return <Checkbox {...props} type="checkbox" />;
    case 'plain':
      return <Plain {...props} />;
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
    'checkbox',
    'plain',
  ]).isRequired,
};

export default Input;
