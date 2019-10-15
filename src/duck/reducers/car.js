import { CAR_LOADING_BEGIN, CAR_LOADING_DONE, CAR_LOADING_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  error: '',
  serverError: false,
  license: '',
  make: '',
  model: '',
  certificate: '',
  vin: '',
  year: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CAR_LOADING_BEGIN:
      return {
        ...initialState,
        loading: true,
        license: action.license,
      };
    case CAR_LOADING_DONE:
      return {
        ...state,
        loading: false,
        error: '',
        serverError: '',
        license: action.license,
        make: action.make,
        model: action.model,
        certificate: action.certificate,
        vin: action.vin,
        year: action.year,
      };
    case CAR_LOADING_ERROR:
      return {
        ...initialState,
        serverError: true,
      };
    default:
      return state;
  }
};
