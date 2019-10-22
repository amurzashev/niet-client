import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/core';
import PropTypes from 'prop-types';
import Caption from 'components/atoms/Caption';
import triggerTopline from 'duck/actions/topline';

const keyframe = keyframes`
  0% {
    opacity: 0;
    top: -60px;
  }
  10% {
    opacity: 1;
    top: 0;
  }
  90% {
    opacity: 1;
    top: 0;
  }
  100% {
    opacity: 0;
    top: -60px;
  }
`;

const animationCSS = () => (
  css`
    animation: ${keyframe} 3s ease;
  `
);

const Topline = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  height: 60px;
  background: ${props => props.theme.colors.error};
  padding: 0 20px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.white};
  ${animationCSS};
`;

export default ComposedComponent => {
  const Component = props => {
    const { topline, bindTopline } = props;
    useEffect(() => {
      if (topline.message) {
        setTimeout(() => {
          bindTopline('');
        }, 3000);
      }
    }, [topline.message]);
    return (
      <>
        {topline.message && <Topline><Caption size="m">{topline.message}</Caption></Topline>}
        <ComposedComponent {...props} />
      </>
    );
  };
  Component.propTypes = {
    topline: PropTypes.shape({
      message: PropTypes.string,
    }).isRequired,
    bindTopline: PropTypes.func.isRequired,
  };
  const mapStateToProps = state => ({ topline: state.topline });
  const mapDispatchToProps = {
    bindTopline: triggerTopline,
  };
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
