import React, { useEffect } from 'react';
import Input from 'components/molecules/Input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setPhoneError, setPhone } from 'duck/actions/phone';
import InputWrap from '../InputWrap';

const phoneProps = {
  type: 'mask',
  mask: '+7(999)999-99-99',
  placeholder: 'Номер телефона',
};

const Phone = ({ phone, bindPhoneError, bindPhone }) => {
  useEffect(() => {
    if (phone.error) {
      // const input = document.getElementById('phoneInput');
      // input.focus();
    }
  }, [phone.error]);
  const onChange = e => {
    if (e.target.value.match(/[0-9]/g)) {
      const phoneVal = e.target.value.match(/[0-9]/g).join('');
      if (phoneVal.length > 1 && phone.error) {
        bindPhoneError('');
      }
      if (phoneVal.length === 11) {
        bindPhone(phoneVal);
      }
    }
  };
  const onFocus = () => {
    // remove phone errors
  };
  const onBlur = e => {
    if (e.target.value.match(/[0-9]/g)) {
      const phoneVal = e.target.value.match(/[0-9]/g).join('');
      if (phoneVal.length < 11) {
        bindPhoneError('Заполните телефон');
      }
    }
  };
  return (
    <InputWrap phone>
      <Input {...phoneProps} onBlur={onBlur} onChange={onChange} error={phone.error} onFocus={onFocus} id="phoneInput" entity="phone" />
    </InputWrap>
  );
};

Phone.propTypes = {
  phone: PropTypes.shape({
    error: PropTypes.string,
  }).isRequired,
  bindPhoneError: PropTypes.func.isRequired,
  bindPhone: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ phone: state.phone });
const mapDispatchToProps = {
  bindPhoneError: setPhoneError,
  bindPhone: setPhone,
};
export default connect(mapStateToProps, mapDispatchToProps)(Phone);
