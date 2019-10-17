import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import {  } from 'duck/actions/car';
import { setPhoneError } from 'duck/actions/phone';
import { setClientError } from 'duck/actions/client';

const Wrap = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const WindowWrap = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// loading, additionalCar, additionalDriver
const renderWindow = {
  loading: <WindowWrap>loading</WindowWrap>,
  additionalCar: <WindowWrap>additionalCar</WindowWrap>,
  additionalDriver: <WindowWrap>additionalDriver</WindowWrap>,
};

const Modal = ({ modal, bindClientError, bindPhoneError, phone, client }) => {

  if (!phone.value) {
    bindPhoneError('Заполните ИИН');
    return null;
  }
  if (!client.iin) {
    bindClientError('Заполните телефон');
    return null;
  }

  return (
    <Wrap>
      {renderWindow[modal.category]}
    </Wrap>
  );
};

Modal.propTypes = {
  modal: PropTypes.shape({
    category: PropTypes.oneOf(['loading', 'additionalCar', 'additionalDriver']),
  }).isRequired,
  bindClientError: PropTypes.func.isRequired,
  bindPhoneError: PropTypes.func.isRequired,
  client: PropTypes.shape({ iin: PropTypes.string }).isRequired,
  phone: PropTypes.shape({ value: PropTypes.string }).isRequired,
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindClientError: setClientError,
  bindPhoneError: setPhoneError,
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
