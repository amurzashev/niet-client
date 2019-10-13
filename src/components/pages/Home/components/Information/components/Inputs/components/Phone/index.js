import React, { useState } from 'react';
import Input from 'components/molecules/Input';

const phoneProps = {
  type: 'mask',
  mask: '+7(999)999-99-99',
  placeholder: 'Номер телефона',
};

export default () => {
  const [value, setValue] = useState('');
  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <Input {...phoneProps} value={value} onChange={onChange} />
  );
};

/*
  convert masked num to plain digits
  if (value.length) {
    console.log(value.match(/[0-9]/g).join(''));
  };
*/
