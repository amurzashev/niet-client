import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './components/pages';
import store from './duck';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map(route => <Route {...route} />)}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
