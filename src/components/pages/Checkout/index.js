/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Standard from 'components/templates/Standard';
import Input from 'components/molecules/Input';
import Caption from 'components/atoms/Caption';
import CheckoutForm from './components/CheckoutForm';
import Additional from './components/Additional';

const Checkout = props => {
  const [visible, setVisible] = useState(false);
  const { client, car, history } = props;
  useEffect(() => {
    if (!client.name || !car.vin) {
      history.push('/');
    } else {
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
      </CheckoutForm>
    </Standard>
  );
};

export default withRouter(Checkout);
