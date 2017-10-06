import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.categoryCreate({title: 'Pizza', budget: 100});
    this.props.categoryCreate({title: 'Clothing', budget: 200});
    this.props.categoryCreate({title: 'Toiletries', budget: 20});
  }

  render() {
    return (
      <main className="main-content">
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText="create"
          onComplete={this.props.categoryCreate} />
        {this.props.categories.length ?
          <div>
            <h6>* Double-click category to edit</h6>
            {this.props.categories.map(item => {
              return <CategoryItem
                key={item.id}
                category={item} />;
            })}
          </div> :
          <h2>Add some categories</h2>
        }</main>
    );
  }
}

let mapStateToProps = state => {
  return {
    categories: state.categories,
    expense: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
