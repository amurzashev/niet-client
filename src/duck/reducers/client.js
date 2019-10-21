import {
  CLIENT_SET_ERROR,
  CLIENT_LOADING_BEGIN,
  CLIENT_LOADING_ERROR,
  CLIENT_LOADING_DONE,
  CLIENT_SET_TICK,
} from '../actions/types';

const initialState = {
  // dummy data:
  iin: '950502300056',
  name: '',
  loading: false,
  error: '',
  tick: false,
  serverError: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_LOADING_BEGIN:
      return {
        ...state,
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
    case CLIENT_SET_TICK:
      return {
        ...state,
        tick: action.tick,
      };
    default:
      return state;
  }
};
