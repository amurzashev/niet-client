import { PHONE_SET_ERROR, PHONE_LOADING_DONE } from '../actions/types';

const initialState = {
  value: '',
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONE_SET_ERROR:
      return {
        value: '',
        loading: false,
        error: action.error,
      };
    case PHONE_LOADING_DONE:
      return {
        value: action.phone,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};
