import React from 'react';
import Input from 'components/molecules/Input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setClientError } from 'duck/actions/client';

const clientProps = {
  type: 'mask',
  mask: '999999999999',
  maskChar: ' ',
  placeholder: 'ИИН водителя',
};

const Client = ({ bindClientError, client }) => {
  const onChange = e => {
    if (e.target.value.match(/[0-9]/g)) {
      const clientVal = e.target.value.match(/[0-9]/g).join('');
      bindClientError('');
      if (clientVal.length === 12) {
        console.log('api call /client and save to redux');
      }
    }
  };
  const onFocus = e => {

  };
  return (
    <Input {...clientProps} onChange={onChange} error={client.error} onFocus={onFocus} id="clientInput" />
  );
};


Client.propTypes = {
  client: PropTypes.shape({
    error: PropTypes.string,
  }).isRequired,
  bindClientError: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({ client: state.client });
const mapDispatchToProps = {
  bindClientError: setClientError,
};
export default connect(mapStateToProps, mapDispatchToProps)(Client);
