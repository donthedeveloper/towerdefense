import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
// import { axios } from 'axios';
import store from './store';


// --------------------- IMPORT COMPONENTS ---------------------
// import Game from './components/Game';
import GameContainer from './containers/GameContainer';


// --------------------- IMPORT REDUX ---------------------
import { addEnemy, createGrid } from './reducers/position';


// --------------------- ON ENTERS ---------------------
const onGameContainerEnter = () => {
  // create enemies
  for (var i = 0; i < 5; i++) {
    store.dispatch(addEnemy());
  }
  
  // create grid
  store.dispatch(createGrid(500, 500));
}


export default () => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ GameContainer } onEnter={ onGameContainerEnter }>
          
        </Route>
      </Router>
    </Provider>
  )
}