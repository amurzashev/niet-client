import { PRICING_SET_PREPRICE } from '../actions/types';

const initialState = {
  price: '',
  preprice: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRICING_SET_PREPRICE:
      return {
        ...state,
        preprice: action.preprice,
      };
    default:
      return state;
  }
};
