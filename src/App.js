import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import routes from './components/pages';
import Nav from './components/organisms/Nav';
import store from './duck';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Switch>
          {routes.map(route => <Route {...route} />)}
        </Switch>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;
