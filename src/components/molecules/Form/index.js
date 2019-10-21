import styled from '@emotion/styled';

export default styled.form`
  display: flex;
  flex-direction: row;
  width: 800px;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
  margin: auto;
`;
