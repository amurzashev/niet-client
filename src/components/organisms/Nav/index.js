import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.nav`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.darkGray};
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.white};
  z-index: 100;
`;


export default () => (
  <Wrap>
    <h1>logo</h1>
  </Wrap>
);
