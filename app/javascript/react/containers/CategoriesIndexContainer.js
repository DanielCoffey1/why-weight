import React, { Component } from 'react';
import CategoryTile from '../components/CategoryTile';

class CategoriesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  // addNewArticle(formPayload){
  //   fetch('/api/v1/articles', {
  //     method: 'POST',
  //     body: JSON.stringify(formPayload)
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //       error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     let newArticle = this.state.articles.concat(body)
  //     this.setState({ articles: newArticle})
  //   })
  //   .catch(error => console.error('Error:', error));
  // }


  componentDidMount() {
    fetch('/api/v1/categories')
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
    let categories = this.state.categories.map(category => {
      return(
        <CategoryTile
          key={category.id}
          id={category.id}
          title={category.title}
          description={category.description}
        />
      )
    })

    return(
      <div className="row">
      <CategoryTile />
        <div className="small-8 small-centered columns">
          <h1>Workout Categories!</h1>
          <hr/>
          {categories}
        </div>
      </div>
    )
  }
}

export default CategoriesIndexContainer;
