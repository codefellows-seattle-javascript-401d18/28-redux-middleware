import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : 0,
      categoryId: props.expense ? props.expense.categoryId : props.categoryId,
      id: props.expense ? props.expense.id : undefined,
      timestamp: props.expense ? props.expense.timestamp : undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form
        className="expense-form"
        onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="expense name"
          value={this.state.name}
          onChange={this.handleChange} />
        <input
          type="number"
          step="0.01"
          name="price"
          value={this.state.price}
          onChange={this.handleChange} />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
