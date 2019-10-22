import { apiRequest } from '.';
import { MODAL_TRIGGER, PRICING_SET_PREPRICE, PRICING_SET_FINALPRICE_STANDALONE } from './types';

export const prePricing = () => (
  (dispatch, getState) => {
    dispatch({
      type: MODAL_TRIGGER,
      isOpen: true,
      category: 'loading',
    });
    const { car, client } = getState();
    apiRequest.post('pre_pricing', { ...car, ...client })
      .then(resp => {
        dispatch({
          type: MODAL_TRIGGER,
          isOpen: false,
          category: '',
        });
        dispatch({
          type: PRICING_SET_PREPRICE,
          preprice: resp.data.price,
        });
        console.log(resp);
      })
      .catch(err => console.log(err));
  }
);

export const getFinalPrice = () => (
  (dispatch, getState) => {
    const { client } = getState();
    apiRequest.post('final_pricing', client)
      .then(resp => {
        dispatch({
          type: PRICING_SET_FINALPRICE_STANDALONE,
          price: String(resp.data.cost),
        });
        console.log(resp);
      })
      .catch(err => console.log(err.response));
  }
);
