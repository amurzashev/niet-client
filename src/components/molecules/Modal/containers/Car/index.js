import React from 'react';
import styled from '@emotion/styled';
import Input from 'components/molecules/Input';
import { loadAdditionalCar } from 'duck/actions/additional';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cars from './components/Cars';

const Wrap = styled.div`
  width: 600px;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const inputStaticProps = {
  type: 'text',
  placeholder: 'Гос номер машины',
  id: 'additional_car_input',
  width: '100%',
  uppercase: true,
};

const buttonStaticProps = {
  type: 'button',
  value: 'Добавить машину',
};

const Driver = ({ bindAdditionalCar }) => {
  const checkInput = () => {
    const carInput = document.getElementById('additional_car_input');
    return {
      isOK: carInput.value.length > 4,
      val: carInput.value,
    };
  };
  const onSubmit = () => {
    const input = checkInput();
    if (input.isOK) {
      bindAdditionalCar(input.val);
    }
  };

  const onChange = () => null;
  return (
    <Wrap>
      <Input {...inputStaticProps} onChange={onChange} />
      <Cars />
      <Input {...buttonStaticProps} onClick={onSubmit} />
    </Wrap>
  );
};

Driver.propTypes = {
  bindAdditionalCar: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  bindAdditionalCar: loadAdditionalCar,
};
export default connect(null, mapDispatchToProps)(Driver);
