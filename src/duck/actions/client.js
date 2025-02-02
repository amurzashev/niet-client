import { apiRequest } from '.';
import {
  CLIENT_SET_ERROR,
  CLIENT_LOADING_BEGIN,
  CLIENT_LOADING_DONE,
  CLIENT_LOADING_ERROR,
  CLIENT_SET_TICK,
  CLIENT_SET_RULES_TICK,
  CLIENT_SET_DATA_TICK,
} from './types';

export const setClient = iinValue => (
  (dispatch, getState) => {
    const { client, phone } = getState();
    if (client.iin !== iinValue) {
      dispatch({
        type: CLIENT_LOADING_BEGIN,
        iin: iinValue,
      });
      apiRequest.post('client', { iin: iinValue, phone: phone.value })
        .then(resp => {
          if (resp.status === 200) {
            dispatch({
              type: CLIENT_LOADING_DONE,
              name: resp.data.response,
            });
          } else {
            dispatch({
              type: CLIENT_LOADING_ERROR,
            });
          }
        })
        .catch(() => {
          dispatch({
            type: CLIENT_LOADING_ERROR,
          });
        });
    }
  }
);

export const setClientError = (error = '') => (
  dispatch => {
    dispatch({
      type: CLIENT_SET_ERROR,
      error,
    });
  }
);

export const setTick = () => (
  (dispatch, getState) => {
    const { client } = getState();
    dispatch({
      type: CLIENT_SET_TICK,
      tick: !client.tick,
    });
  }
);

export const setRulesTick = () => (
  (dispatch, getState) => {
    const { client } = getState();
    dispatch({
      type: CLIENT_SET_RULES_TICK,
      rulesTick: !client.rulesTick,
    });
  }
);

export const setDataTick = () => (
  (dispatch, getState) => {
    const { client } = getState();
    dispatch({
      type: CLIENT_SET_DATA_TICK,
      dataTick: !client.dataTick,
    });
  }
);
