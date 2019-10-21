import React, { useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { triggerModal } from 'duck/actions/modal';

const WindowWrap = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    margin: 0 20px;
  }
`;

const Exit = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
`;

const Window = ({ children, bindModal, additional }) => {
  const keyDownPress = useCallback(e => {
    if (e.key === 'Escape') {
      bindModal();
    }
  }, [bindModal]);
  useEffect(() => {
    window.addEventListener('keydown', keyDownPress);
    return () => {
      window.removeEventListener('keydown', keyDownPress);
    };
  }, [keyDownPress]);
  return (
    <WindowWrap>
      { additional.loading && <Overlay /> }
      <Exit onClick={bindModal}>X</Exit>
      {children}
    </WindowWrap>
  );
};


Window.propTypes = {
  children: PropTypes.node.isRequired,
  bindModal: PropTypes.func.isRequired,
  additional: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindModal: triggerModal,
};
export default connect(mapStateToProps, mapDispatchToProps)(Window);
