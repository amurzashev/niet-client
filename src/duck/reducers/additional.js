import { MODAL_LOADING_BEGIN, MODAL_LOADING_ERROR, ADDITIONAL_REMOVE_CLIENT } from '../actions/types';

const intialState = {
  clients: [
    // { iin: '', privilege: false }
    // dummy data:
    { iin: '940101300056', privilege: false, name: 'ДОСТОЕВКИЙ БОБУР АЙДАРУЛЫ 7 класс,' },
    { iin: '940101300050', privilege: false, name: 'СУЛЕЙМЕНОВ АРМАН АЙДАРУЛЫ 7 класс,' },
    { iin: '940101300010', privilege: false, name: 'КРУТОЙ ДЭНЧИК АЙДАРУЛЫ 7 класс,' },
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
    case ADDITIONAL_REMOVE_CLIENT:
      console.log(state.clients);
      return {
        ...state,
        clients: state.clients.filter(client => client.iin !== action.iin),
      };
    default:
      return state;
  }
};
