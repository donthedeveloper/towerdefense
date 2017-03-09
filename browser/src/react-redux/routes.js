import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { axios } from 'axios';
// import store from './store';

// import Game from './components/Game';
import Grid from './components/Grid';

export default () => {
  return (
//     <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ Grid }>
          
        </Route>
      </Router>
//     </Provider>
  )
}