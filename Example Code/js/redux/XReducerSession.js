/**
 * @flow
 * @providesModule XReducerSession
 */
 "use strict";

 import { XActionTypes } from 'XReduxActions';
 import {
   fromJS,
   Map,
 } from 'immutable';

 const DEFAULT_STATE: Map<string, any> = (fromJS({
   id: 0,
 }): any);

 export function reducerSession(state: Map<string, any> = DEFAULT_STATE, action: Object) {
  switch (action.type) {
    case XActionTypes.SET_ID:
      return  setId(state, action);
    default:
      return state;
  }
 }

const setId = (state: Map<string, any>, action: Object) => {
  return state.set('id', action.id);
}
