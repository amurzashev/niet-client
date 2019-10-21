import { apiRequest } from '.';
import {
  ADDITIONAL_ADD_CLIENT,
  ADDITIONAL_REMOVE_CLIENT,
  MODAL_LOADING_BEGIN,
  MODAL_LOADING_ERROR,
} from './types';

export const loadAdditionalClient = iin => (
  (dispatch, getState) => {
    const { client } = getState();
    if (iin !== client) {
      dispatch({
        type: MODAL_LOADING_BEGIN,
      });
      apiRequest.post('additional_client', { iin: client.iin, additional: iin })
        .then(resp => console.log(resp))
        .catch(() => {
          dispatch({
            type: MODAL_LOADING_ERROR,
          });
        });
    } else {
      // show error, not allowed
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
