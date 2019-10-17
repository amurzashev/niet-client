import styled from '@emotion/styled';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;
