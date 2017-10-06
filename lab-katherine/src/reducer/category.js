let categoryValidate = category => {
  let { id, title, timestamp } = category;
  if(!id || !title || !timestamp) {
    throw new Error('VALIDATION FAILED: category needs more things');
  }
};

let initialState = [];

export default (state=initialState, action) => {
  let {payload, type} = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    categoryValidate(payload);
    return [...state, payload];
  case 'CATEGORY_UPDATE':
    categoryValidate(payload);
    return state.map(category => category.id === payload.id ? payload : category);
  case 'CATEGORY_DELETE':
    categoryValidate(payload);
    return state.filter(category => category.id !== payload.id);
  default:
    return state;
  }
};
