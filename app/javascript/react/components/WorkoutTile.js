import React from 'react';
import { Link } from 'react-router';

const WorkoutTile = (props) => {
  // debugger
  return(
    <div className="category-tile">
        <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default WorkoutTile;
