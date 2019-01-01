import { combineReducers } from 'redux';
import client from './client';
import modal from './modal';
import phone from './phone';
import car from './car';

export default combineReducers({
  client,
  modal,
  phone,
  car,
});
