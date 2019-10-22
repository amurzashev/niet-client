import {
  CLIENT_SET_ERROR,
  CLIENT_LOADING_BEGIN,
  CLIENT_LOADING_ERROR,
  CLIENT_LOADING_DONE,
  CLIENT_SET_TICK,
  CLIENT_SET_DATA_TICK,
  CLIENT_SET_RULES_TICK,
} from '../actions/types';

const initialState = {
  iin: '950502300056',
  name: 'МУРЗАШЕВ АБЫЛАЙ АЙДАРУЛЫ 7 класс',
  loading: false,
  error: '',
  tick: false,
  rulesTick: false,
  dataTick: false,
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
    case CLIENT_SET_DATA_TICK:
      return {
        ...state,
        dataTick: action.dataTick,
      };
    case CLIENT_SET_RULES_TICK:
      return {
        ...state,
        rulesTick: action.rulesTick,
      };
    default:
      return state;
  }
};
