import { apiRequest } from '.';
import {
  ADDITIONAL_ADD_CLIENT,
  ADDITIONAL_REMOVE_CLIENT,
  ADDITIONAL_ADD_CAR,
  ADDITIONAL_REMOVE_CAR,
  MODAL_LOADING_BEGIN,
  MODAL_LOADING_ERROR,
  TOPLINE_SET_MESSAGE,
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
      dispatch({
        type: TOPLINE_SET_MESSAGE,
        message: 'Этот ИИН уже используется у страхуемого',
      });
    }
  }
);

export const removeClient = iin => (
  dispatch => {
    dispatch({
      type: ADDITIONAL_REMOVE_CLIENT,
      iin,
    });
  }
);

export const loadAdditionalCar = license => (
  (dispatch, getState) => {
    const { car } = getState();
    if (license !== car.license) {
      dispatch({
        type: MODAL_LOADING_BEGIN,
      });
      apiRequest.post('car', { license })
        .then(resp => {
          if (resp.data.warning || resp.data.error) {
            dispatch({
              type: MODAL_LOADING_ERROR,
            });
          } else {
            dispatch({
              type: ADDITIONAL_ADD_CAR,
              license: resp.data.data.Vehicle.REG_NUM,
              make: resp.data.data.Vehicle.MARK,
              model: resp.data.data.Vehicle.MODEL,
              certificate: resp.data.data.Vehicle.REG_CERT_NUM,
              vin: resp.data.data.Vehicle.VIN,
              year: resp.data.data.Vehicle.NYEAR,
            });
          }
        });
    } else {
      dispatch({
        type: TOPLINE_SET_MESSAGE,
        message: 'Эта машина уже указана',
      });
    }
  }
);

export const removeCar = license => (
  dispatch => {
    dispatch({
      type: ADDITIONAL_REMOVE_CAR,
      license,
    });
  }
);
