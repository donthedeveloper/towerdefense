import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { axios } from 'axios';
import store from './store';

export default () => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/">
    
        </Route>
      </Router>
    </Provider>
  )
}