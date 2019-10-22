/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from '@emotion/styled';
import Info from './Info';

const Wrap = styled.div`
  width: 100%;
`;

const Input = styled.input`
  height: 50px;
  width: ${props => props.width};
  appearance: none;
  border: 1px solid ${props => props.error ? props.theme.colors.error : props.theme.colors.darkGray};
  border-radius: 0;
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
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`;

export default props => {
  return (
    <Wrap>
      <Input {...props} />
      <Info entity={props.entity} />
    </Wrap>
  );
};
