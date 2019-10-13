import React from 'react';
import Standard from 'components/templates/Standard';
import Form from 'components/molecules/Form';
import Information from './components/Information';

const Home = () => (
  <Standard preset="home">
    <Form>
      <Information />
    </Form>
  </Standard>
);

export default Home;
