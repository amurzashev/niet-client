import {
  MODAL_LOADING_BEGIN,
  MODAL_LOADING_ERROR,
  ADDITIONAL_REMOVE_CLIENT,
  ADDITIONAL_ADD_CLIENT,
} from '../actions/types';

const intialState = {
  clients: [
    // { iin: '', privilege: false }
  ],
  cars: [
    // 'license plate num'
  ],
  loading: false,
  serverError: false,
  error: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case MODAL_LOADING_BEGIN:
      return {
        ...state,
        loading: true,
        serverError: false,
        error: '',
      };
    case MODAL_LOADING_ERROR:
      return {
        ...state,
        loading: false,
        serverError: true,
        error: '',
      };
    case ADDITIONAL_ADD_CLIENT:
      return {
        ...state,
        loading: false,
        serverError: false,
        error: '',
        clients: [...state.clients, { name: action.name, iin: action.iin }],
      };
    case ADDITIONAL_REMOVE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(client => client.iin !== action.iin),
      };
    default:
      return state;
  }
};
