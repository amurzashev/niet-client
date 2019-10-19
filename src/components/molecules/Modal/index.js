import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { triggerModal } from 'duck/actions/modal';

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

const WindowWrap = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Exit = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Window = ({ children, bindModal }) => (
  <WindowWrap>
    <Exit onClick={bindModal}>X</Exit>
    {children}
  </WindowWrap>
);


Window.propTypes = {
  children: PropTypes.node.isRequired,
  bindModal: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  bindModal: triggerModal,
};
const ConnectedWindow = connect(null, mapDispatchToProps)(Window);

// loading, additionalCar, additionalDriver
const renderWindow = {
  loading: <ConnectedWindow>loading</ConnectedWindow>,
  additionalCar: <ConnectedWindow>additionalCar</ConnectedWindow>,
  additionalDriver: <ConnectedWindow>additionalDriver</ConnectedWindow>,
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
