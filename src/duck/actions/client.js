import { CLIENT_SET_ERROR } from './types';

export const setClientError = (error = '') => (
  dispatch => {
    dispatch({
      type: CLIENT_SET_ERROR,
      error,
    });
  }
);
