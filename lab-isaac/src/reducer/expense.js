let expenseValidate = expense => {
  let {id, categoryId, name, timestamp} = expense;
  if(!id || !categoryId || !name || !timestamp) {
    throw new Error('VALIDATION FAILED in expense reducer');
  }
};

let initialState = {};

export default (state=initialState, action) => {
  let{type, payload} = action;
  switch(type) {
  case 'CATEGORY_CREATE': return {...state, [payload.id]: []};
  case 'CATEGORY_DELETE': return {...state, [payload.id]: null};

  case 'EXPENSE_CREATE':
      expenseValidate(payload);
      let categoryExpenses = state[payload.categoryId];
      return {...state, [payload.categoryId]: [...categoryExpenses, payload]};

  case 'EXPENSE_UPDATE':
    expenseValidate(payload);
    let updateState = state;
      updateState[payload.categoryId] = updateState[payload.categoryId].map(expense => {
        if(expense.id === payload.id) expense = payload;
        return expense;
      });
      return {...updateState}

  case 'EXPENSE_DELETE':
    expenseValidate(payload);
      let deleteState = state;
      deleteState[payload.categoryId] = deleteState[payload.categoryId].filter(expense => expense.id !== payload.id)
    return {...deleteState};
  default: return state;
  }
};
