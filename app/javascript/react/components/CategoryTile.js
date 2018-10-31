import React from 'react';
import { Link } from 'react-router';

const CategoryTile = (props) => {
  // debugger
  return(
    <div className="category-tile">
      <Link to={`/categories/${props.id}`}>
        {props.title}
      </Link>
      <p>{props.description}</p>
    </div>
  )
}

export default CategoryTile;
