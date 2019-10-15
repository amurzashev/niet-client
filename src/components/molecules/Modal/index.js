import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  loading: <div>loading</div>,
  additionalCar: <div>additionalCar</div>,
  additionalDriver: <div>additionalDriver</div>,
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
const mapStateToProps = state => ({ modal: state.modal });
export default connect(mapStateToProps)(Modal);
