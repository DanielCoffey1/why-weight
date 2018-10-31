import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CategoriesIndexContainer from '../containers/CategoriesIndexContainer';
import CategoriesShowContainer from '../containers/CategoriesShowContainer';
import CategoryTile from './CategoryTile';


const App = (props) => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path='/categories' component={CategoriesIndexContainer} />
        <Route path='/categories/:id' component={CategoriesShowContainer} />
      </Router>
    </div>
  );
}

export default App


// export const App = (props) => {
  //   return (<h1>Make It So React</h1>)
  // }
