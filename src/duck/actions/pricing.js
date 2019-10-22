import { apiRequest } from '.';
import { MODAL_TRIGGER, PRICING_SET_PREPRICE } from './types';

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

export const getFinalPrice = () => {

};
