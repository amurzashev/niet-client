import React from 'react';
import Standard from 'components/templates/Standard';
import Form from 'components/molecules/Form';
import Information from './components/Information';

const Home = () => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <Standard preset="home">
      <Form onSubmit={onSubmit}>
        <Information />
      </Form>
    </Standard>
  );
};

export default Home;
