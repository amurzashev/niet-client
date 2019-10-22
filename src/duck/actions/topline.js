import { TOPLINE_SET_MESSAGE } from './types';

export default (message = '') => (
  (dispatch, getState) => {
    const { topline } = getState();
    if (topline.message !== message) {
      dispatch({
        type: TOPLINE_SET_MESSAGE,
        message,
      });
    }
  }
);
