import React from 'react';
import styled from '@emotion/styled';
import Caption from 'components/atoms/Caption';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { triggerModal } from 'duck/actions/modal';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  cursor: pointer;
  align-items: center;
  padding-left: 30px;
`;

const AdditionalDriver = ({ bindModal, modalType, text }) => (
  <Wrap onClick={() => bindModal(modalType)}>
    <Caption size="s">{text}</Caption>
  </Wrap>
);

AdditionalDriver.propTypes = {
  bindModal: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
const mapDispatchToProps = {
  bindModal: triggerModal,
};
export default connect(null, mapDispatchToProps)(AdditionalDriver);
