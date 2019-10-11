import styled from '@emotion/styled';

const getFontSize = size => {
  switch (size) {
    case 'xs':
      return 8;
    case 's':
      return 12;
    case 'm':
      return 16;
    case 'l':
      return 20;
    default:
      return 16;
  }
};

export default styled.p`
  font-family: 'Roboto' sans-serif;
  font-size: ${props => getFontSize(props.size)}px;
`;
