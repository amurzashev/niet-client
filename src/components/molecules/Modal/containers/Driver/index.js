import React from 'react';
import styled from '@emotion/styled';
import Input from 'components/molecules/Input';

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
  return (
    <Wrap>
      <Input {...inputStaticProps} />
      <Input {...buttonStaticProps} />
    </Wrap>
  );
};
