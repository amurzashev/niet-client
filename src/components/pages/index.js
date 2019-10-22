import Home from './Home';
import withModal from '../hocs/withModal';
import withPingPong from '../hocs/withPingPong';
import withTopline from '../hocs/withTopline';

export default [
  {
    exact: true,
    component: withTopline(withPingPong(withModal(Home))),
    key: 'HomePage',
    path: '/',
  },
];
