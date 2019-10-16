import styled from '@emotion/styled';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  & > input {
    width: 50%;
  }
  ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    & > input {
      width: 100%;
    }
  }
`;
