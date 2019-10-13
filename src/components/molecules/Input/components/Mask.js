import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import Text from './Text';

const Mask = props => {
  const { mask, placeholder } = props;
  const maskProps = {
    mask,
  };
  const textProps = {
    placeholder,
  };
  return (
    <InputMask {...maskProps}>
      {inputProps => <Text {...inputProps} {...textProps} />}
    </InputMask>
  );
};

Mask.propTypes = {
  mask: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
Mask.defaultProps = {
  placeholder: '',
};
export default Mask;
