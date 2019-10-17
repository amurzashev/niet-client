import React from 'react';
import styled from '@emotion/styled';
import Caption from 'components/atoms/Caption';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { triggerModal } from 'duck/actions/modal';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
  align-items: center;
  ${props => props.theme.breakpoints.mobile} {
    padding-left: 0;
    width: 100%;
  }
`;

const AdditionalDriver = ({ bindModal, modalType, text }) => (
  <Wrap onClick={() => bindModal(modalType)}>
    <Caption size="s" style={{ paddingLeft: 30 }}>{text}</Caption>
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
