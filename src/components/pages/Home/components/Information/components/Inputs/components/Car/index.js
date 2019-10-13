import React from 'react';
import Input from 'components/molecules/Input';
import { connect } from 'react-redux';

const carProps = {
  type: 'text',
  placeholder: 'A123ABC или 123ABC01',
};

const Car = props => {
  const onFocus = e => {
    // const { phone } = props;
    // if (!phone.value) {
    //   e.target.blur();
    // }
  };
  return (
    <Input {...carProps} onFocus={onFocus} uppercase />
  );
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Car);
