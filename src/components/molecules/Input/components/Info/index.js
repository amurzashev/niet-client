/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Caption from 'components/atoms/Caption';
import { connect } from 'react-redux';
import { nameFormatting } from './utils';

const Wrap = styled.div`
  height: 20px;
  width: 100%;
`;

const Info = ({ entity, ...props }) => {
  if (!entity) return null;
  const info = {
    loading: props[entity].loading,
    error: props[entity].error,
    serverError: props[entity].serverError,
  };
  if (entity === 'client') {
    info.name = nameFormatting(props[entity].name);
  }
  if (entity === 'car') {
    info.name = props[entity].name;
  }

  return (
    <Wrap>
      {info.loading && <Caption size="s">Загрузка</Caption>}
      {info.name && <Caption size="s">{info.name}</Caption>}
      {info.error && <Caption size="s" color="error">{info.error}</Caption>}
      {info.serverError && <Caption size="s" color="error">Ошибка загрузки, попробуйте еще раз</Caption>}
    </Wrap>
  );
};

Info.propTypes = {
  entity: PropTypes.oneOf(['', 'car', 'client']).isRequired,
};
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Info);
