import {combineReducers} from 'redux';
import expenseReducer from './expense';
import categoryReducer from './category';

export default combineReducers({
  categories: categoryReducer,
  expense: expenseReducer,
});

