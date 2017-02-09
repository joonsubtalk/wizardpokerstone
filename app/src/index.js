import React from 'react';
import logger from 'redux-logger';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

// own file-loader state to store's user
const userReducer = (state={}, action) => {
  switch(action.type){
    case "CHANGE_NAME": {
      state = {...state, name: action.payload};
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload};
      break;
    }
    default:
      break;
  }
  return state;
};
// default values
const tweetsReducer = (state=[], action) => {
  return state;
};
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const middleware = applyMiddleware(logger());

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log('store changed', store.getState())
})

/*
store.dispatch((dispatch) => {
  dispatch({})
  // do something async
  dispatch({})
})
*/

/*
store.dispatch({type: 'CHANGE_NAME', payload: "jsub"});
store.dispatch({type: 'CHANGE_AGE', payload: 22});
store.dispatch({type: 'CHANGE_AGE', payload: 29});
*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
