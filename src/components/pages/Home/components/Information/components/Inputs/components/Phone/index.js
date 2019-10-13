import React from 'react';
import Input from 'components/molecules/Input';

const phoneProps = {
  type: 'mask',
  mask: '+7(999)999-99-99',
  maskChar: ' ',
  placeholder: 'Номер телефона',
};

export default () => (
  <Input {...phoneProps} />
);
