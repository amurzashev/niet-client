import React from 'react';
import Input from 'components/molecules/Input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPhoneError } from 'duck/actions/phone';
import { setClientError } from 'duck/actions/client';

const carProps = {
  type: 'text',
  placeholder: 'A123ABC или 123ABC01',
};

const Car = props => {
  const onFocus = e => {
    const {
      phone,
      client,
      bindPhoneError,
      bindClientError,
    } = props;
    let shouldBlur = false;
    if (!client.iin) {
      shouldBlur = true;
      bindClientError('Заполните ИИН');
      const clientInput = document.getElementById('clientInput');
      clientInput.focus();
    }
    if (!phone.value) {
      shouldBlur = true;
      bindPhoneError('Заполните телефон');
      const phoneInput = document.getElementById('phoneInput');
      phoneInput.focus();
    }
    if (shouldBlur) {
      e.target.blur();
    }
  };
  const onChange = e => {
    let len;
    if (Number.isInteger(Number(e.target.value.charAt(0)))) {
      len = 8;
    } else {
      len = 7;
    }
    if (e.target.value.length === len) {
      console.log('call api');
    }
  };
  return (
    <Input {...carProps} onChange={onChange} onFocus={onFocus} uppercase />
  );
};

Car.propTypes = {
  phone: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  client: PropTypes.shape({
    iin: PropTypes.string,
  }).isRequired,
  bindPhoneError: PropTypes.func.isRequired,
  bindClientError: PropTypes.func.isRequired,
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindPhoneError: setPhoneError,
  bindClientError: setClientError,
};
export default connect(mapStateToProps, mapDispatchToProps)(Car);
