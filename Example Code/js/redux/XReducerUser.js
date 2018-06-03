/**
 * @flow
 * @providesModule XReducerUser
 */
 "use strict";

 import { XActionTypes } from 'XReduxActions';
 import {
   fromJS,
   Map,
 } from 'immutable';

 const DEFAULT_STATE: Map<string, any> = (fromJS({
   counter: {
     clicks: 0,
   }
 }): any);

 export function reducerUsers(state: Map<string, any> = DEFAULT_STATE, action: Object) {
  switch (action.type) {
    case XActionTypes.ADD_CLICK:
      return addClick(state, action);
    case XActionTypes.ADD_LIKE:
      return addLike(state, action);
    default:
      return state;
  }
 }

const addClick = (state: Map<string, any>, action: Object) => {
  const oldValue = state.getIn(['counter', 'clicks']);
  var updated = state.setIn(['counter', 'clicks'], oldValue + .5);
  return updated;
}

const addLike = (state: Map<string, any>, action: Object) => {
  return state;
}
