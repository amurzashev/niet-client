import Home from './Home';
import Checkout from './Checkout';
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
  {
    exact: true,
    key: 'CheckotPage',
    component: withTopline(withPingPong(withModal(Checkout))),
    path: '/checkout',
  },
];
