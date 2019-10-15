import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Caption from 'components/atoms/Caption';
import { nameFormatting } from './utils';

const Wrap = styled.div`
  height: 30px;
  width: 100%;
`;

const Info = ({ client }) => (
  <Wrap>
    {client.loading && <Caption size="s">Загрузка</Caption>}
    {client.name && <Caption size="s">{nameFormatting(client.name)}</Caption>}
    {client.error && <Caption size="s" color="error">{client.error}</Caption>}
    {client.serverError && <Caption size="s" color="error">Ошибка загрузки, попробуйте еще раз</Caption>}
  </Wrap>
);

Info.propTypes = {
  client: PropTypes.shape({
    loading: PropTypes.bool,
    name: PropTypes.string,
    error: PropTypes.string,
    serverError: PropTypes.bool,
  }).isRequired,
};
const mapStateToProps = state => ({ client: state.client });
export default connect(mapStateToProps)(Info);
