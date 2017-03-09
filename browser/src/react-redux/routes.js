import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
// import { axios } from 'axios';
import store from './store';


// --------------------- IMPORT COMPONENTS ---------------------
// import Game from './components/Game';
import Game from './containers/GameContainer';


// --------------------- IMPORT REDUX ---------------------
import { addEnemy } from './reducers/position';


// --------------------- ON ENTERS ---------------------
const onGameContainerEnter = () => {
  store.dispatch(addEnemy());
}


export default () => {
  return (
//     <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ GameContainer } onEnter={ onGameContainerEnter }>
          
        </Route>
      </Router>
//     </Provider>
  )
}