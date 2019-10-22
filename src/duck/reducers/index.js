import { combineReducers } from 'redux';
import client from './client';
import modal from './modal';
import phone from './phone';
import car from './car';
import additional from './additional';
import topline from './topline';
import pricing from './pricing';

export default combineReducers({
  client,
  modal,
  phone,
  car,
  additional,
  topline,
  pricing,
});
