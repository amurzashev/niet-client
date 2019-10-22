import { TOPLINE_SET_MESSAGE } from '../actions/types';

const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOPLINE_SET_MESSAGE:
      return {
        message: action.message,
      };
    default:
      return state;
  }
};
