import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  cursor: pointer;
  appearance: none;
  border-radius: 0;
  height: 50px;
  width: ${props => props.width || '100%'};
  border: 0;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

export default props => <Wrap {...props} />;
