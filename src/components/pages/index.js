import Home from './Home';
import withModal from '../hocs/withModal';

export default [
  {
    exact: true,
    component: withModal(Home),
    key: 'HomePage',
    path: '/',
  },
];
