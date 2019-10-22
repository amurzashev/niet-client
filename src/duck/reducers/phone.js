import {
  PHONE_SET_ERROR,
  PHONE_LOADING_DONE,
  PHONE_LOADING_BEGIN,
  PHONE_LOADING_ERROR,
} from '../actions/types';

const initialState = {
  value: '',
  loading: false,
  error: '',
  serverError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONE_LOADING_BEGIN:
      return {
        value: action.value,
        loading: true,
        error: '',
        serverError: '',
      };
    case PHONE_LOADING_DONE:
      return {
        ...state,
        loading: false,
        error: '',
        serverError: false,
      };
    case PHONE_LOADING_ERROR:
      return {
        ...state,
        value: '',
        loading: false,
        error: '',
        serverError: true,
      };
    case PHONE_SET_ERROR:
      return {
        value: '',
        loading: false,
        serverError: false,
        error: action.error,
      };
    default:
      return state;
  }
};
