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
    error,
    onFocus,
    id,
    onBlur,
  } = props;
  const maskProps = {
    mask,
    value,
    onChange,
    onFocus,
    onBlur,
  };
  const textProps = {
    placeholder,
    autoFocus,
    error,
    id,
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
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoFocus: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
};
Mask.defaultProps = {
  placeholder: '',
  autoFocus: false,
  value: null,
  error: '',
  onFocus: () => null,
  onBlur: () => null,
  id: null,
};
export default Mask;
