import React, { Component } from 'react';
import WorkoutTile from '../components/WorkoutTile';
import CategoryTile from '../components/CategoryTile';

class WorkoutsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: []
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
    fetch(`/api/v1/categories/${this.props.params.id}`)
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
      .then(body => {
        this.setState({ category: body });
          fetch(`/api/v1/workouts`)
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
          .then(body => {
            let relevantWorkouts = []
            body.forEach((workout) => {
              if(this.state.category.id == workout.category_id){
                relevantWorkouts.push(workout)
              }
            })
            this.setState({ workouts: relevantWorkouts });
          })
          .catch(error => console.error(`Error in fetch: ${error.message}`));
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
    }


  render() {
    let workouts = this.state.workouts.map(workout => {
      return(
        <WorkoutTile
          key={workout.id}
          title={workout.title}
          description={workout.description}
          user_id={workout.user_id}
          category_id={workout.category_id}
        />
      )
    })

    return(
      <div className="row">
      <WorkoutTile />
        <div className="small-8 small-centered columns">
          {workouts}
        </div>
      </div>
    )
  }
}

export default WorkoutsIndexContainer;
