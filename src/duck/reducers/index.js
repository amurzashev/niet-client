import { combineReducers } from 'redux';
import client from './client';
import modal from './modal';
import phone from './phone';

export default combineReducers({
  client,
  modal,
  phone,
});
