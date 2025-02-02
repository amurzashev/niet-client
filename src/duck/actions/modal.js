/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import {
  MODAL_TRIGGER,
  CLIENT_SET_ERROR,
  CAR_SET_ERROR,
  PHONE_SET_ERROR,
  TOPLINE_SET_MESSAGE,
} from './types';

export const triggerModal = (category = '') => (
  (dispatch, getState) => {
    const { modal, client, car, phone, additional } = getState();
    if (!client.name) {
      dispatch({
        type: CLIENT_SET_ERROR,
        error: 'Заполните ИИН',
      });
      dispatch({
        type: TOPLINE_SET_MESSAGE,
        message: 'Заполните все поля',
      });
    } else if (!car.vin) {
      dispatch({
        type: CAR_SET_ERROR,
        error: 'Добавьте машину',
      });
      dispatch({
        type: TOPLINE_SET_MESSAGE,
        message: 'Заполните все поля',
      });
    } else if (!phone.value) {
      dispatch({
        type: PHONE_SET_ERROR,
        error: 'Заполните телефон',
      });
      dispatch({
        type: TOPLINE_SET_MESSAGE,
        message: 'Заполните все поля',
      });
    } else {
      const setCategory = typeof category === 'string' ? category : ''; // workaround so that we dont get event object into redux store
      if (setCategory === 'additionalDriver' && additional.cars.length > 0) {
        // error remove cars
        dispatch({
          type: TOPLINE_SET_MESSAGE,
          message: 'Уберите дополнительные машины',
        });
      } else if (setCategory === 'additionalCar' && additional.clients.length > 0) {
        // error remove clients
        dispatch({
          type: TOPLINE_SET_MESSAGE,
          message: 'Уберите допольнительных водителей',
        });
      } else {
        // all goods homie, you can proceed
        dispatch({
          type: MODAL_TRIGGER,
          isOpen: !modal.isOpen,
          category: setCategory,
        });
      }
    }
  }
);
