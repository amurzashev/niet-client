/* eslint-disable react/prop-types */
/* proptypes => same old redux store */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { prePricing } from 'duck/actions/pricing';
import Standard from 'components/templates/Standard';
import Input from 'components/molecules/Input';
import Caption from 'components/atoms/Caption';
import CheckoutForm from './components/CheckoutForm';
import Additional from './components/Additional';
import Pricing from './components/Pricing';

const Checkout = props => {
  const [visible, setVisible] = useState(false);
  const {
    client,
    car,
    history,
    bindPrePricing,
  } = props;
  useEffect(() => {
    if (!client.name || !car.vin) {
      history.push('/');
    } else {
      bindPrePricing();
      setVisible(true);
    }
  }, []);
  const onSubmit = e => {
    e.preventDefault();
  };

  if (!visible) {
    return null;
  }

  return (
    <Standard preset="home">
      <CheckoutForm onSubmit={onSubmit}>
        <Caption size="l">Имя</Caption>
        <Input type="plain" defaultValue={client.name} width="100%" readOnly />
        <Caption size="l">Машина</Caption>
        <Input type="plain" defaultValue={`${car.make} ${car.model} ${car.year}`} width="100%" readOnly />
        <Additional />
        <Pricing />
      </CheckoutForm>
    </Standard>
  );
};

const mapDispatchToProps = {
  bindPrePricing: prePricing,
};
export default withRouter(connect(null, mapDispatchToProps)(Checkout));
