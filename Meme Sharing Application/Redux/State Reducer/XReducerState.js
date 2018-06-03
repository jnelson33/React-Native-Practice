/**
 * @flow
 * @providesModule XReducerState
 */
 "use strict";

 import { XActionTypes } from 'XReduxActions';
 import {
   fromJS,
   Map,
 } from 'immutable';

 const DEFAULT_STATE: Map<string, any> = (fromJS({
   login: 0,
   username: '',
 }): any);

 export function XReducerState(state: Map<string, any> = DEFAULT_STATE, action: Object) {
  switch (action.type) {
    case XActionTypes.LOGIN_ACCOUNT:
      return login(state, action);
    case XActionTypes.LOGOUT_ACCOUNT:
      return logout(state, action);
    case XActionTypes.SET_USERNAME:
      return setUsername(state, action);
    default:
      return state;
  }
 }

const login = (state: Map<string, any>, action: Object) => {
  var updated = state.set('login', 1);
  return updated;
}

const logout = (state: Map<string, any>, action: Object) => {
  var updated = state.set('login', 0);
  return updated;
}

const setUsername = (state: Map<string, any>, action: Object) => {
  var updated = state.set('username', action.username);
  return updated;
}
