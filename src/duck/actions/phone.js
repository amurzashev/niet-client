/* eslint-disable import/prefer-default-export */
import { apiRequest } from '.';
import {
  PHONE_LOADING_BEGIN,
  PHONE_LOADING_DONE,
  PHONE_SET_ERROR,
  PHONE_LOADING_ERROR,
} from './types';

export const setPhone = phoneVal => (
  (dispatch, getState) => {
    const { phone } = getState();
    if (phone.value !== phoneVal) {
      dispatch({
        type: PHONE_LOADING_BEGIN,
        value: phoneVal,
      });
      apiRequest.post('phone', { phone: phoneVal })
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: PHONE_LOADING_DONE,
            });
          }
        })
        .catch(() => {
          dispatch({
            type: PHONE_LOADING_ERROR,
          });
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
