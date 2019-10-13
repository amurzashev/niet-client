import Home from './Home';
import withModal from '../hocs/withModal';
import withPingPong from '../hocs/withPingPong';

export default [
  {
    exact: true,
    component: withPingPong(withModal(Home)),
    key: 'HomePage',
    path: '/',
  },
];
