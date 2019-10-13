import {
  CLIENT_SET_ERROR,
  CLIENT_LOADING_BEGIN,
  CLIENT_LOADING_ERROR,
  CLIENT_LOADING_DONE,
} from '../actions/types';

const initialState = {
  iin: '',
  name: '',
  loading: false,
  error: '',
  serverError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_LOADING_BEGIN:
      return {
        iin: action.iin,
        name: '',
        loading: true,
        error: '',
        serverError: false,
      };
    case CLIENT_LOADING_DONE:
      return {
        ...state,
        name: action.name,
        loading: false,
        error: '',
        serverError: false,
      };
    case CLIENT_LOADING_ERROR:
      return {
        ...initialState,
        serverError: true,
      };
    case CLIENT_SET_ERROR:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};
