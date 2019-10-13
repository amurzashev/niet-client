import React from 'react';
import styled from '@emotion/styled';
import Phone from './components/Phone';
import Client from './components/Client';
import Car from './components/Car';

const Wrap = styled.div`
  margin: 20px 0;
`;

export default () => (
  <Wrap>
    <Phone />
    <Client />
    <Car />
  </Wrap>
);
