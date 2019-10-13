import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import Text from './Text';

const Mask = props => {
  const {
    mask,
    placeholder,
    value,
    onChange,
    autoFocus,
  } = props;
  const maskProps = {
    mask,
    value,
    onChange,
  };
  const textProps = {
    placeholder,
    autoFocus,
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
};
Mask.defaultProps = {
  placeholder: '',
  autoFocus: false,
  value: null,
};
export default Mask;
