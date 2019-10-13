import React from 'react';
import Input from 'components/molecules/Input';

const driverProps = {
  type: 'mask',
  mask: '999999999999',
  maskChar: ' ',
  placeholder: 'ИИН водителя',
};

export default () => (
  <Input {...driverProps} />
);
