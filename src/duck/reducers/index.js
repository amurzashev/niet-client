import { combineReducers } from 'redux';
import client from './client';
import modal from './modal';
import phone from './phone';
import car from './car';
import additional from './additional';

export default combineReducers({
  client,
  modal,
  phone,
  car,
  additional,
});
