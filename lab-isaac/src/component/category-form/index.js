import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : 0,
      id: props.category ? props.category.id : null,
      timestamp: props.category ? props.category.timestamp : null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({
      title: '',
      budget: 0,
    });
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter a budget category"
          value={this.state.title}
          onChange={this.handleChange} />
        <input
          type="number"
          name="budget"
          value={this.state.budget}
          onChange={this.handleChange} />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
