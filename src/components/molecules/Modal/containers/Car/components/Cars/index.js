/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Caption from 'components/atoms/Caption';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from 'components/molecules/Input';
import { removeCar } from 'duck/actions/additional';

const Wrap = styled.div`
  margin: 20px 0;
`;

const DriverWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > p {
    width: 100%;
  }
  margin-bottom: 20px;
  padding-left: 20px;
  background: ${props => props.theme.colors.darkGray};
  ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    padding: initial;
    & > p {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Drivers = ({ additional, bindCar }) => {
  const onClick = license => {
    bindCar(license);
  };

  return (
    <Wrap>
      {additional.cars.map(car => (
        <DriverWrap key={car.license}>
          <Caption size="s">{car.make} {car.model} {car.year}</Caption>
          <Input type="button" width="50%" value="Удалить машину" onClick={() => onClick(car.license)} />
        </DriverWrap>
      ))}
    </Wrap>
  );
};

Drivers.propTypes = {
  additional: PropTypes.shape({
    cars: PropTypes.arrayOf(
      PropTypes.shape({
        make: PropTypes.string,
        model: PropTypes.string,
        year: PropTypes.string,
        license: PropTypes.string,
      }),
    ),
  }).isRequired,
  bindCar: PropTypes.func.isRequired,
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindCar: removeCar,
};
export default connect(mapStateToProps, mapDispatchToProps)(Drivers);
