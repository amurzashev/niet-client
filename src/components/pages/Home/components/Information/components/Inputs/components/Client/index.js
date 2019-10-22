import React, { useState } from 'react';
import Input from 'components/molecules/Input';
import Caption from 'components/atoms/Caption';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setClientError, setClient, setTick } from 'duck/actions/client';
import styled from '@emotion/styled';
import { setPhoneError } from 'duck/actions/phone';
import AdditionalEntity from '../AdditionalEntity';
import InputWrap from '../InputWrap';

const clientProps = {
  type: 'mask',
  mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  maskChar: ' ',
  placeholder: 'ИИН водителя',
  id: 'clientInput',
  entity: 'client',
  width: '100%',
};

const checkProps = {
  type: 'checkbox',
  width: '100%',
};

const Wrap = styled.div``;

const Client = ({
  bindClientError,
  client,
  phone,
  bindPhoneError,
  bindClient,
  bindTick,
}) => {
  const [val, setVal] = useState('');
  const onChange = e => {
    setVal(e.target.value);
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
  const dynamicProps = {
    onChange,
    error: client.error,
    onFocus,
    value: val,
  };
  return (
    <Wrap>
      <InputWrap>
        <Input {...clientProps} {...dynamicProps} />
        <AdditionalEntity modalType="additionalDriver" text="Добавить еще водителей" />
      </InputWrap>
      <Input {...checkProps} tick={client.tick} toggleTick={bindTick}>
        <Caption size="s">Льготы для инвалидов и ветеранов</Caption>
      </Input>
    </Wrap>
  );
};


Client.propTypes = {
  client: PropTypes.shape({
    error: PropTypes.string,
    tick: PropTypes.bool,
  }).isRequired,
  phone: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  bindClientError: PropTypes.func.isRequired,
  bindPhoneError: PropTypes.func.isRequired,
  bindClient: PropTypes.func.isRequired,
  bindTick: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ client: state.client, phone: state.phone });
const mapDispatchToProps = {
  bindClientError: setClientError,
  bindPhoneError: setPhoneError,
  bindClient: setClient,
  bindTick: setTick,
};
export default connect(mapStateToProps, mapDispatchToProps)(Client);
