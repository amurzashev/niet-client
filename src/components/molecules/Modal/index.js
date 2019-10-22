import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Window from './components/Window';
import Car from './containers/Car';
import Driver from './containers/Driver';

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
  ${props => props.theme.breakpoints.mobile} {
    overflow: scroll;
    align-items: flex-start;
    padding-top: 120px;
    padding-bottom: 40px;
  }
`;

// loading, additionalCar, additionalDriver
const renderWindow = {
  loading: 'loading',
  additionalCar: <Car />,
  additionalDriver: <Driver />,
};

const Modal = ({ modal }) => (
  <Wrap>
    <Window>
      {renderWindow[modal.category]}
    </Window>
  </Wrap>
);

Modal.propTypes = {
  modal: PropTypes.shape({
    category: PropTypes.oneOf(['loading', 'additionalCar', 'additionalDriver']),
  }).isRequired,
};
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Modal);
