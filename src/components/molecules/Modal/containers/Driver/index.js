import React from 'react';
import styled from '@emotion/styled';
import Input from 'components/molecules/Input';
import Drivers from './components/Drivers';

const Wrap = styled.div`
  width: 600px;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

const inputStaticProps = {
  type: 'mask',
  placeholder: 'ИИН водителя',
  mask: '999999999999',
};

const buttonStaticProps = {
  type: 'button',
  value: 'Добавить водителя',
};

export default () => {
  const onChange = e => {
    const iin = e.target.value.match(/\d+/g);
    if (iin) {
      console.log(iin[0]);
    }
  };

  return (
    <Wrap>
      <Input {...inputStaticProps} onChange={onChange} />
      <Drivers />
      <Input {...buttonStaticProps} />
    </Wrap>
  );
};
