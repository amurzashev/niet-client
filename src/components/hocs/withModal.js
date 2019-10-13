import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../molecules/Modal';

export default ConnectedComponent => {
  const Component = props => {
    const { modal } = props;
    return (
      <>
        { modal.isOpen ? <Modal /> : null }
        <ConnectedComponent {...props} />
      </>
    );
  };
  Component.propTypes = {
    modal: PropTypes.shape({
      isOpen: PropTypes.bool,
    }).isRequired,
  };
  const mapStateToProps = state => state;
  return connect(mapStateToProps)(Component);
};
