import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 4px;
  appearance: none;
  border: 1px solid ${props => props.theme.colors.darkGray};
  font-size: 16px;
  padding: 0 20px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  &:focus {
    outline: none;
  }
  &:disabled {
    background: ${props => props.theme.colors.lightGray};
    cursor: not-allowed;
  }
`;

export default props => (
  <Input {...props} />
);
