import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './components/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => <Route {...route} />)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
