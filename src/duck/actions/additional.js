import { apiRequest } from '.';
import {
  ADDITIONAL_ADD_CLIENT,
  ADDITIONAL_REMOVE_CLIENT,
  MODAL_LOADING_BEGIN,
  MODAL_LOADING_ERROR,
  // TOPLINE_SET_MESSAGE,
} from './types';

export const loadAdditionalClient = iin => (
  (dispatch, getState) => {
    const { client } = getState();
    if (iin !== client.iin) {
      dispatch({
        type: MODAL_LOADING_BEGIN,
      });
      apiRequest.post('additional_client', { iin: client.iin, additional: iin })
        .then(resp => {
          dispatch({
            type: ADDITIONAL_ADD_CLIENT,
            name: resp.data.response,
            iin: resp.data.iin,
          });
        })
        .catch(() => {
          dispatch({
            type: MODAL_LOADING_ERROR,
          });
        });
    } else {
      // show error
    }
  }
);

// export const addClient = iin => (
//   (dispatch, getState) => {

//   }
// );

export const removeClient = iin => (
  dispatch => {
    dispatch({
      type: ADDITIONAL_REMOVE_CLIENT,
      iin,
    });
  }
);
