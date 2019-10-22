/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Standard from 'components/templates/Standard';
import Form from 'components/molecules/Form';

const Checkout = props => {
  useEffect(() => {
    const { client, car, history } = props;
    if (!client.name || !car.vin) {
      history.push('/');
    }
  }, []);
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Standard preset="home">
      <Form onSubmit={onSubmit}>
        <h1>hello</h1>
      </Form>
    </Standard>
  );
};

export default withRouter(Checkout);
