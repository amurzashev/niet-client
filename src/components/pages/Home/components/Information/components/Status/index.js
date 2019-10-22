import React from 'react';
import styled from '@emotion/styled';
import Caption from 'components/atoms/Caption';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export default () => {
  return (
    <Wrap>
      <Caption size="xl">ОГПО</Caption>
    </Wrap>
  );
};
