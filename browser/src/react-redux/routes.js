import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
// import { axios } from 'axios';
import store from './store';


// --------------------- IMPORT COMPONENTS ---------------------
// import Game from './components/Game';
import GameContainer from './containers/GameContainer';


// --------------------- IMPORT REDUX ---------------------
import { addEnemy, createGrid, createPath, addTower } from './reducers/position';


// --------------------- ON ENTERS ---------------------
const onGameContainerEnter = () => {
  // create enemies
  for (var i = 0; i < 5; i++) {
    const delayInSeconds = i * 5;
    store.dispatch(addEnemy(delayInSeconds));
  }

  // create grid
  store.dispatch(createGrid(500, 500));

  // create path
  const arrOfRectangles = [
    {
      left: 225,
      top: 0,
      width: 50,
      height: 100
    },
    {
      left: 225,
      top: 100,
      width: 50,
      height: 100
    },
    {
      left: 225,
      top: 200,
      width: 50,
      height: 100
    },
    {
      left: 225,
      top: 300,
      width: 50,
      height: 100
    },
    {
      left: 225,
      top: 400,
      width: 50,
      height: 100
    }
  ];

  store.dispatch(createPath(arrOfRectangles));

  // create towers
  const towerPositions = [[275, 150], [200, 300]];
  towerPositions.forEach((coordinates) => {
    store.dispatch(addTower(coordinates));
  });
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
