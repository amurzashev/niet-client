import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../molecules/Modal';

export default ConnectedComponent => {
  const Component = props => {
    const { modal } = props;
    return (
      <>
        { modal.isOpen ? <Modal type={modal.type} /> : null }
        <ConnectedComponent {...props} />
      </>
    );
  };
  Component.propTypes = {
    modal: PropTypes.shape({
      isOpen: PropTypes.bool,
      type: PropTypes.oneOf([
        'loading',
        'additionalDriver',
        'additionalCar',
      ]),
    }).isRequired,
  };
  const mapStateToProps = state => state;
  return connect(mapStateToProps)(Component);
};
