import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Caption from 'components/atoms/Caption';
import Input from 'components/molecules/Input';

const Additional = ({ additional }) => {
  const renderAdditional = () => {
    if (additional.clients.length > 0) {
      return additional.clients.map(client => (
        <Input type="plain" width="100%" key={client.iin} defaultValue={client.name} readOnly />
      ));
    }
    return additional.cars.map(car => (
      <Input type="plain" width="100%" key={car.vin} defaultValue={`${car.make} ${car.model} ${car.year}`} readOnly />
    ));
  };

  if (additional.clients.length === 0 && additional.cars.length === 0) {
    return null;
  }
  return (
    <>
      <Caption size="l">Дополнительно</Caption>
      {renderAdditional()}
    </>
  );
};

Additional.propTypes = {
  additional: PropTypes.shape({
    cars: PropTypes.arrayOf(
      PropTypes.shape({
        make: PropTypes.string,
        model: PropTypes.string,
        year: PropTypes.string,
        vin: PropTypes.string,
      }),
    ),
    clients: PropTypes.arrayOf([
      PropTypes.shape({
        name: PropTypes.string,
        iin: PropTypes.string,
      }),
    ]),
  }).isRequired,
};
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Additional);
