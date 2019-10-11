const initialState = {
  iin: '',
  name: '',
  isLoading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  };
};