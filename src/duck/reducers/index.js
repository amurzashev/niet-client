import { combineReducers } from 'redux';
import client from './client';
import modal from './modal';

export default combineReducers({
  client,
  modal,
});
