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
  justify-content: center;
`;

const AdditionalDriver = ({ bindModal }) => (
  <Wrap onClick={() => bindModal('additionalDriver')}>
    <Caption size="s">Добавить водителя</Caption>
  </Wrap>
);

AdditionalDriver.propTypes = {
  bindModal: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  bindModal: triggerModal,
};
export default connect(null, mapDispatchToProps)(AdditionalDriver);
