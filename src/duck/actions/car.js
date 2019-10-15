/* eslint-disable import/prefer-default-export */
import { apiRequest } from '.';
import {
  // CAR_SET_ERROR,
  CAR_LOADING_BEGIN,
  CAR_LOADING_DONE,
  CAR_LOADING_ERROR,
} from './types';

export const setCar = license => (
  (dispatch, getState) => {
    const { car } = getState();
    if (car.license !== license) {
      dispatch({
        type: CAR_LOADING_BEGIN,
        license,
      });
      apiRequest.post('car', { license })
        .then(resp => {
          if (resp.data.warning || resp.data.error) {
            dispatch({
              type: CAR_LOADING_ERROR,
            });
          } else {
            dispatch({
              type: CAR_LOADING_DONE,
              license: resp.data.data.Vehicle.REG_NUM,
              make: resp.data.data.Vehicle.MARK,
              model: resp.data.data.Vehicle.MODEL,
              certificate: resp.data.data.Vehicle.REG_CERT_NUM,
              vin: resp.data.data.Vehicle.vin,
            });
          }
        })
        .catch(() => {
          dispatch({
            type: CAR_LOADING_ERROR,
          });
        });
    }
  }
);
