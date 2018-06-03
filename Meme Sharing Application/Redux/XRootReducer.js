/**
 * @flow
 * @providesModule XRootReducer
 */
 "use strict";

import { combineReducers } from 'redux';
import { reducerUsers } from 'XReducerUser';
import { reducerSession } from 'XReducerSession';
import { reducerActive } from 'XReducerActive';
import { XReducerState} from 'XReducerState';
import { XReducerUserLocation } from 'XReducerUserLocation';

const RootReducer = () => {
  var reducers = {
    // users: reducerUsers,
    // session: reducerSession,
    // active: reducerActive,
    applicationState: XReducerState,
    userCoordinates: XReducerUserLocation,
  };
  return combineReducers(reducers);
}

export default RootReducer;
