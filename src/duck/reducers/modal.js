import { MODAL_TRIGGER } from '../actions/types';

const initialState = {
  isOpen: true, // temp: false
  category: 'additionalDriver', // temp: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TRIGGER:
      return {
        isOpen: action.isOpen,
        category: action.category,
      };
    default:
      return state;
  }
};
