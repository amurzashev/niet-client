/* eslint-disable import/prefer-default-export */
// import { apiRequest } from '.';
import { PHONE_LOADING_BEGIN, PHONE_LOADING_DONE, PHONE_LOADING_ERROR } from './types';

export const setPhone = phoneVal => (
  (dispatch, getState) => {
    const { phone } = getState();
    if (phone.value !== phoneVal) {
      dispatch({
        type: PHONE_LOADING_BEGIN,
        phone: '',
      });
      setTimeout(() => {
        dispatch({
          type: PHONE_LOADING_DONE,
          phone: phoneVal,
        });
      }, 3000);
    }
  }
);

export const setPhoneError = (error = '') => (
  dispatch => {
    dispatch({
      type: PHONE_LOADING_ERROR,
      error,
    });
  }
);
