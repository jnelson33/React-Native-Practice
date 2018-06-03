/**
 * @flow
 * @providesModule XReducerActive
 */
 "use strict";

 import { XActionTypes } from 'XReduxActions';
 import {
   fromJS,
   Map,
 } from 'immutable';

 const DEFAULT_STATE: Map<string, any> = (fromJS({
   active: 1,
 }): any);

 export function reducerActive(state: Map<string, any> = DEFAULT_STATE, action: Object) {
  switch (action.type) {
    case XActionTypes.ADD_ACTIVE:
      return setActive(state, action);
    default:
      return state;
  }
 }

const setActive = (state: Map<string, any>, action: Object) => {
  var updated = state.set('active', 1);
  return updated;
}
