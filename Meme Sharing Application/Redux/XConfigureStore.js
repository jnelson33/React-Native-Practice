/**
 * @flow
 * @providesModule XConfigureStore
 */
 "use strict";

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import  {
  fromJS,
  isImmutable,
} from 'immutable';

import rootReducer from 'XRootReducer';

const loggerMiddleware = createLogger({
  collapsed: false,
  diff: true,
});

const INITIAL_STATE = {
  // users: fromJS({
  //   counter: {
  //     clicks: 0,
  //   },
  // }),
  // session: fromJS({
  //   id: 0,
  // }),
  // active: fromJS({
  //   active: 0,
  // }),
  applicationState: fromJS({
    login: 0,
    username: '',
  }),

  userCoordinates: fromJS({
    latitude: 37.78825,
    longitude: -122.4324,
  }),
}

const immutableLoggerMiddleware = createLogger({
  stateTransformer: (state) => {
    let newState = {};
    for (var i of Object.keys(state)) {
      if (isImmutable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  },
  diff: true
});

function configureStore() {
  const preloadedState = INITIAL_STATE;
  return createStore(
    rootReducer(),
    preloadedState,
    applyMiddleware(immutableLoggerMiddleware),
  )
}

module.exports = {
  configureStore,
}
