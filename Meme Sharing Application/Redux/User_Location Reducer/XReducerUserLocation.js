/**
 * @flow
 * @providesModule XReducerUserLocation
 */
 "use strict";

 import { XActionTypes } from 'XReduxActions';
 import {
   fromJS,
   Map,
 } from 'immutable';

 const DEFAULT_STATE: Map<string, any> = (fromJS({
   latitude: 0,
   longitude: 0,
 }): any);

 export function XReducerUserLocation(state: Map<string, any> = DEFAULT_STATE, action: Object) {
  switch (action.type) {
    case XActionTypes.PULL_COORDINATES:
      return setLocation(state, action);
    default:
      return state;
  }
 }

const setLocation = (state: Map<string, any>, action: Object) => {
  const newContent = state.merge({
    "latitude": action.latitude,
    "longitude": action.longitude,
  });

  const updated = state.set('latitude', action.latitude );
  return newContent;
}

//'longitude', action.longitude
