import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const setPresetRules = props => {
  switch (props.preset) {
    case 'home':
      return `
        margin: 40px 20px 0 20px;
        ${props.theme.breakpoints.mobile} {
          margin: 0;
        }
      `;
    default:
      return null;
  }
};

const ChildSection = styled.section`
  position: relative;
  top: 60px;
  ${props => setPresetRules(props)}
`;

const Standard = ({ children, preset }) => (
  <ChildSection preset={preset}>
    {children}
  </ChildSection>
);

Standard.propTypes = {
  children: PropTypes.node.isRequired,
  preset: PropTypes.oneOf([
    'home',
  ]),
};
Standard.defaultProps = {
  preset: '',
};
export default Standard;
