import React from 'react';
import styled from '@emotion/styled';

const Input = styled.input`
  height: 50px;
  width: 100%;
  appearance: none;
  border: 1px solid ${props => props.error ? props.theme.colors.error : props.theme.colors.darkGray};
  font-size: 16px;
  padding: 0 20px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.error ? props.theme.colors.error : 'initial'};
  &:focus {
    outline: none;
  }
  &:disabled {
    background: ${props => props.theme.colors.lightGray};
    cursor: not-allowed;
  }
  ${props => props.uppercase && `
    text-transform: uppercase;
  `}
`;

export default props => <Input {...props} />;
