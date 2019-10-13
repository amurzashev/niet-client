import styled from '@emotion/styled';

const getFontSize = size => {
  switch (size) {
    case 'xs':
      return 10;
    case 's':
      return 14;
    case 'm':
      return 16;
    case 'l':
      return 20;
    case 'xl':
      return 24;
    default:
      return 16;
  }
};

export default styled.p`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-size: ${props => getFontSize(props.size)}px;
  font-weight: ${props => props.bold ? '700' : '400'};
`;
