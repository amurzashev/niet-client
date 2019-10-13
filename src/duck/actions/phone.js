/* eslint-disable import/prefer-default-export */
// import { apiRequest } from '.';
import { PHONE_LOADING_BEGIN, PHONE_LOADING_DONE, PHONE_SET_ERROR } from './types';

export const setPhone = phoneVal => (
  (dispatch, getState) => {
    const { phone } = getState();
    if (phone.value !== phoneVal) {
      dispatch({
        type: PHONE_LOADING_BEGIN,
        phone: '',
      });
      dispatch({
        type: PHONE_LOADING_DONE,
        phone: phoneVal,
      });
    }
  }
);

export const setPhoneError = (error = '') => (
  dispatch => {
    dispatch({
      type: PHONE_SET_ERROR,
      error,
    });
  }
);
