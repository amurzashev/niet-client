import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Caption from 'components/atoms/Caption';
import triggerTopline from 'duck/actions/topline';

const Topline = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${props => props.theme.colors.error};
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

export default ComposedComponent => {
  const Component = props => {
    useEffect(() => {
      const { bindTopline } = props;
      setTimeout(() => {
        bindTopline('');
      }, 1500);
    }, []);
    const { topline } = props;
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
