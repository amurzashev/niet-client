import React from 'react';
import styled from '@emotion/styled';
import Phone from './components/Phone';
import Driver from './components/Driver';
import Car from './components/Car';

const Wrap = styled.div`
  margin: 20px 0;
`;

export default () => (
  <Wrap>
    <Phone />
    {/* <Driver /> */}
    <Car />
  </Wrap>
);
