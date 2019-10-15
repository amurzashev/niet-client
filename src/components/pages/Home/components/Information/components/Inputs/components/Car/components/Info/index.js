/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Caption from 'components/atoms/Caption';

const Wrap = styled.div`
  height: 30px;
  width: 100%;
`;

const Info = ({ car }) => (
  <Wrap>
    {car.loading && <Caption size="s">Загрузка</Caption>}
    {car.make && <Caption size="s">{car.make} {car.model} {car.year}</Caption>}
    {car.error && <Caption size="s" color="error">{car.error}</Caption>}
    {car.serverError && <Caption size="s" color="error">Машина не найдена, проверьте правильность данных</Caption>}
  </Wrap>
);

Info.propTypes = {
  car: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
    serverError: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    vin: PropTypes.string,
    certificate: PropTypes.string,
  }).isRequired,
};
const mapStateToProps = state => ({ car: state.car });
export default connect(mapStateToProps)(Info);
