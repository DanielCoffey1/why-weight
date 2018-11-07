import React, { Component } from 'react';
import CategoryTile from '../components/CategoryTile';

class CategoriesShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    let categoryID = this.props.params.id
    fetch(`/api/v1/categories/${categoryID}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then (body => {
        this.setState({categories: body});
      })
      .catch(error => console.error(`error in fetch: ${error.message}`))
  }

  render() {

    return(
      <div className="row">
      <CategoryTile />
        <div className="small-8 small-centered columns">
        <h1> {this.state.categories.title} </h1>
        <p> {this.state.categories.description} </p>
        </div>
      </div>
    )
  }
}

export default CategoriesShowContainer;
