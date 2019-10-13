import React from 'react';
import Input from 'components/molecules/Input';

const clientProps = {
  type: 'mask',
  mask: '999999999999',
  maskChar: ' ',
  placeholder: 'ИИН водителя',
};

export default () => {
  const onChange = e => {
    if (e.target.value.match(/[0-9]/g)) {
      const client = e.target.value.match(/[0-9]/g).join('');
      if (client.length === 12) {
        console.log('api call /client and save to redux');
      }
    }
  };
  return (
    <Input {...clientProps} onChange={onChange} />
  );
};
