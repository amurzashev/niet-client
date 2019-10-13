import React from 'react';
import Input from 'components/molecules/Input';

const phoneProps = {
  type: 'mask',
  mask: '+7(999)999-99-99',
  placeholder: 'Номер телефона',
};

export default () => {
  const onChange = e => {
    if (e.target.value.match(/[0-9]/g)) {
      const phone = e.target.value.match(/[0-9]/g).join('');
      if (phone.length === 11) {
        console.log('api call /phone and save to redux');
      }
    }
  };
  const onFocus = e => {
    // remove phone errors
  };
  return (
    <Input {...phoneProps} onChange={onChange} />
  );
};

/*
  convert masked num to plain digits => 11 length
  if (value.length) {
    console.log(value.match(/[0-9]/g).join(''));
  };
*/
