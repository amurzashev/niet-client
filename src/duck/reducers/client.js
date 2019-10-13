import { CLIENT_SET_ERROR } from '../actions/types';

const initialState = {
  iin: '',
  name: '',
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_SET_ERROR:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};
