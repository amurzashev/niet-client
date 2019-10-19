/* eslint-disable import/prefer-default-export */
import { MODAL_TRIGGER } from './types';

export const triggerModal = (category = '') => (
  (dispatch, getState) => {
    const { modal } = getState();
    const setCategory = typeof category === 'string' ? category : ''; // workaround to not get event
    dispatch({
      type: MODAL_TRIGGER,
      isOpen: !modal.isOpen,
      category: setCategory,
    });
  }
);
