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
`;

const Exit = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Window = ({ children, bindModal }) => {
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
      <Exit onClick={bindModal}>X</Exit>
      {children}
    </WindowWrap>
  );
};


Window.propTypes = {
  children: PropTypes.node.isRequired,
  bindModal: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  bindModal: triggerModal,
};
export default connect(null, mapDispatchToProps)(Window);
