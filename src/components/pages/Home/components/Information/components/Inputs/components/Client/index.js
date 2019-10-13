import React from 'react';
import Input from 'components/molecules/Input';

const clientProps = {
  type: 'mask',
  mask: '999999999999',
  maskChar: ' ',
  placeholder: 'ИИН водителя',
};

export default () => (
  <Input {...clientProps} />
);
