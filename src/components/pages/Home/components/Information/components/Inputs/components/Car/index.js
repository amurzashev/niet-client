import React from 'react';
import Input from 'components/molecules/Input';

const carProps = {
  type: 'text',
  placeholder: 'A123ABC или 123ABC01',
};

export default () => (
  <Input {...carProps} />
);
