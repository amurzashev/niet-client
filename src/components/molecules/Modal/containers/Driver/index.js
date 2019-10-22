import React from 'react';
import styled from '@emotion/styled';
import Input from 'components/molecules/Input';
import { loadAdditionalClient } from 'duck/actions/additional';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Drivers from './components/Drivers';

const Wrap = styled.div`
  width: 600px;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const inputStaticProps = {
  type: 'mask',
  placeholder: 'ИИН водителя',
  mask: '999999999999',
  id: 'additional_driver_input',
};

const buttonStaticProps = {
  type: 'button',
  value: 'Добавить водителя',
};

const Driver = ({ bindAdditionalClient }) => {
  const checkInput = () => {
    const clientInput = document.getElementById('additional_driver_input');
    const numericValue = clientInput.value.replace(/\D/g, '');
    return {
      isOK: numericValue.length === 12,
      val: numericValue,
    };
  };
  const onSubmit = () => {
    const input = checkInput();
    if (input.isOK) {
      bindAdditionalClient(input.val);
    }
  };

  const onChange = () => null;
  return (
    <Wrap>
      <Input {...inputStaticProps} onChange={onChange} />
      <Drivers />
      <Input {...buttonStaticProps} onClick={onSubmit} />
    </Wrap>
  );
};

Driver.propTypes = {
  bindAdditionalClient: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  bindAdditionalClient: loadAdditionalClient,
};
export default connect(null, mapDispatchToProps)(Driver);
