/* eslint-disable import/prefer-default-export */
import { MODAL_TRIGGER } from './types';

export const triggerModal = (category = '') => (
  (dispatch, getState) => {
    const { modal } = getState();
    dispatch({
      type: MODAL_TRIGGER,
      isOpen: !modal.isOpen,
      category,
    });
  }
);
