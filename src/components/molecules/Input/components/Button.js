import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  cursor: pointer;
  height: 50px;
  width: 100%;
  border: 0;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

export default props => <Wrap {...props} />;
