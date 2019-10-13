import React from 'react';
import styled from '@emotion/styled';
import Status from './components/Status';

const Wrap = styled.div`
  width: 70%;
  padding: 20px;
  border-top: 1px solid ${props => props.theme.colors.darkGray};
  border-left: 1px solid ${props => props.theme.colors.darkGray};
  border-bottom: 1px solid ${props => props.theme.colors.darkGray};
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    border-top: none;
    border-left: none;
  }
`;

export default () => (
  <Wrap>
    <Status />
  </Wrap>
);
