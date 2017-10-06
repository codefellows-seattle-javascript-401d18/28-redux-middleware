import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';
import {expenseCreate} from '../../action/expense-actions';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseForm: false,
      categoryForm: false,
    };

    this.toggleExpense = this.toggleExpense.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  toggleExpense() {
    this.setState({expenseForm: !this.state.expenseForm});
  }

  toggleCategory() {
    this.setState({categoryForm: !this.state.categoryForm});
  }

  render() {
    return (
      <div className="category-item">
        <div className="content-container">
          <button className="remove" onClick={() => this.props.categoryDelete(this.props.category)}>Delete</button>
          <button onClick={this.toggleExpense}>New</button>
          <h3 key={this.props.category.id} onDoubleClick={this.toggleCategory}>{this.props.category.title}: ${this.props.category.budget} budget</h3>

          {this.state.categoryForm ?
            <CategoryForm
              buttonText="update"
              onComplete={this.props.categoryUpdate}
              category={this.props.category}
              toggle={this.toggleCategory}/> :
            undefined
          }
        </div>
        <div className="content-container">
          {this.state.expenseForm ?
            <ExpenseForm
              buttonText="create"
              categoryId={this.props.category.id}
              onComplete={this.props.expenseCreate}
              toggle={this.toggleExpense}/> :
            undefined
          }

          {this.props.expense[this.props.category.id].length ?
            this.props.expense[this.props.category.id].map(expense => <ExpenseItem key={expense.id} expense={expense}/>)
            :
            <h3>You Currently Have No Expenses</h3>
          }
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    expense: state.expense,
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
