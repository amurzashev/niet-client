import { PRICING_SET_PREPRICE, PRICING_SET_FINALPRICE_STANDALONE } from '../actions/types';

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
    case PRICING_SET_FINALPRICE_STANDALONE:
      return {
        ...state,
        price: action.price,
      };
    default:
      return state;
  }
};
