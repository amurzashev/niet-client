import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Nav from 'components/organisms/Nav';

const ChildSection = styled.section`
  position: relative;
  top: 60px;
`;

const Standard = ({ children }) => (
  <section>
    <Nav />
    <ChildSection>
      {children}
    </ChildSection>
  </section>
);

Standard.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Standard;
