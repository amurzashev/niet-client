const initialState = {
  loading: false,
  error: '',
  serverError: false,
  license: '',
  make: '',
  model: '',
  certificate: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
