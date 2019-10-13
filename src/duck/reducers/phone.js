import { PHONE_LOADING_ERROR } from '../actions/types';

const initialState = {
  value: '',
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONE_LOADING_ERROR:
      return {
        value: '',
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
