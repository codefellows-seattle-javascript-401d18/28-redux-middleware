import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseDelete, expenseUpdate} from '../../action/expense-actions';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseEdit: false,
    };
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  toggleUpdate(e) {
    this.setState({
      expenseEdit: !this.state.expenseEdit,
    });
  }

  render() {
    return(
      <section className="expense-item" id={this.props.expense.id}>
        <button className="remove" onClick={() => this.props.expenseDelete(this.props.expense)}>Delete</button>
        <button onClick={this.toggleUpdate}>Edit</button>
        <h2>{this.props.expense.name}</h2>
        <h3>Price: ${this.props.expense.price}</h3>

        {this.state.expenseEdit ?
          <ExpenseForm
            buttonText="update"
            toggle={this.toggleUpdate}
            onComplete={this.props.expenseUpdate}
            expense={this.props.expense} />
          :
          undefined
        }
      </section>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseDelete: expense => dispatch(expenseDelete(expense)),
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
