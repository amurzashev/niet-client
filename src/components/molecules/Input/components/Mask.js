import React from 'react';
import styled from '@emotion/styled';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import Text from './Text';
import Info from './Info';

const Wrap = styled.div`
  width: 100%;
`;

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
    entity,
    width,
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
    width,
  };
  return (
    <Wrap>
      <InputMask {...maskProps}>
        {inputProps => <Text {...inputProps} {...textProps} />}
      </InputMask>
      <Info entity={entity} />
    </Wrap>
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
  width: PropTypes.string,
  entity: PropTypes.string,
};
Mask.defaultProps = {
  placeholder: '',
  autoFocus: false,
  value: null,
  error: '',
  onFocus: () => null,
  onBlur: () => null,
  id: null,
  width: '100%',
  entity: '',
};
export default Mask;
