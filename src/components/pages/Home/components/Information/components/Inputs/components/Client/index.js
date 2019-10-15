import React from 'react';
import Input from 'components/molecules/Input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setClientError, setClient } from 'duck/actions/client';
import styled from '@emotion/styled';
import { setPhoneError } from 'duck/actions/phone';
import Info from './components/Info';
import AdditionalEntity from '../AdditionalEntity';
import InputWrap from '../InputWrap';

const clientProps = {
  type: 'mask',
  mask: '999999999999',
  maskChar: ' ',
  placeholder: 'ИИН водителя',
};

const Wrap = styled.div``;

const Client = ({
  bindClientError,
  client,
  phone,
  bindPhoneError,
  bindClient,
}) => {
  const onChange = e => {
    if (e.target.value.match(/[0-9]/g)) {
      const clientVal = e.target.value.match(/[0-9]/g).join('');
      if (client.error) {
        bindClientError('');
      }
      if (clientVal.length === 12) {
        bindClient(clientVal);
      }
    }
  };
  const onFocus = e => {
    if (!phone.value) {
      bindPhoneError('Заполните телефон');
      e.target.blur();
      // document.getElementById('phoneInput').focus();
    }
  };
  return (
    <Wrap>
      <InputWrap>
        <Input {...clientProps} onChange={onChange} error={client.error} onFocus={onFocus} id="clientInput" />
        <AdditionalEntity modalType="additionalDriver" text="Добавить водителя" />
      </InputWrap>
      <Info />
    </Wrap>
  );
};


Client.propTypes = {
  client: PropTypes.shape({
    error: PropTypes.string,
  }).isRequired,
  phone: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  bindClientError: PropTypes.func.isRequired,
  bindPhoneError: PropTypes.func.isRequired,
  bindClient: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ client: state.client, phone: state.phone });
const mapDispatchToProps = {
  bindClientError: setClientError,
  bindPhoneError: setPhoneError,
  bindClient: setClient,
};
export default connect(mapStateToProps, mapDispatchToProps)(Client);
