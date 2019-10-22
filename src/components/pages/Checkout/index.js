/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Standard from 'components/templates/Standard';
import Form from 'components/molecules/Form';

const Checkout = props => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const { client, car, history } = props;
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
      <Form onSubmit={onSubmit}>
        <div>
          <h1>скоро здесь что-то будет</h1>
        </div>
      </Form>
    </Standard>
  );
};

export default withRouter(Checkout);
