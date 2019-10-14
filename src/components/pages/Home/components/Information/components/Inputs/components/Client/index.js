import React from 'react';
import Input from 'components/molecules/Input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setClientError, setClient } from 'duck/actions/client';
import { setPhoneError } from 'duck/actions/phone';

const clientProps = {
  type: 'mask',
  mask: '999999999999',
  maskChar: ' ',
  placeholder: 'ИИН водителя',
};

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
  const onFocus = () => {
    if (!phone.value) {
      bindPhoneError('Заполните телефон');
      // document.getElementById('phoneInput').focus();
    }
  };
  return (
    <Input {...clientProps} onChange={onChange} error={client.error} onFocus={onFocus} id="clientInput" />
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
