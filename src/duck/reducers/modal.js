import { MODAL_TRIGGER } from '../actions/types';

const initialState = {
  isOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TRIGGER:
      return {
        isOpen: action.isOpen,
      };
    default:
      return state;
  }
};
