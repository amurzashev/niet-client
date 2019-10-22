import {
  CAR_LOADING_BEGIN,
  CAR_LOADING_DONE,
  CAR_LOADING_ERROR,
  CAR_SET_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  error: '',
  serverError: false,
  license: '953CDB02',
  make: 'HYUNDAI',
  model: 'CRETA',
  certificate: 'AT00025661',
  vin: 'Z94G2811DHR033156',
  year: '2017',
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
        serverError: false,
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
    case CAR_SET_ERROR:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};
