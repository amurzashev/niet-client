import React from 'react';
import styled from '@emotion/styled';
import Text from './Text';

const PlainText = styled(Text)`
  cursor: initial;
  border: 1px solid ${props => props.theme.colors.white};
`;

export default props => (
  <PlainText {...props} />
);
