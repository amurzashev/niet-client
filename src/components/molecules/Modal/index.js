import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Window from './components/Window';

const Wrap = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

// loading, additionalCar, additionalDriver
const renderWindow = {
  loading: <Window>loading</Window>,
  additionalCar: <Window>additionalCar</Window>,
  additionalDriver: <Window>additionalDriver</Window>,
};

const Modal = ({ modal }) => (
  <Wrap>
    {renderWindow[modal.category]}
  </Wrap>
);

Modal.propTypes = {
  modal: PropTypes.shape({
    category: PropTypes.oneOf(['loading', 'additionalCar', 'additionalDriver']),
  }).isRequired,
};
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Modal);
