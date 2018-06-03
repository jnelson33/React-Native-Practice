/**
 * @flow
 * @providesModule XReduxActions
 */
 "use strict";

 export const XActionTypes = {
   // ADD_CLICK: 'ADD_CLICK',
   // ADD_LIKE: 'ADD_LIKE',
   // SET_ID: 'SET_ID',
   // ADD_ACTIVE: 'ADD_ACTIVE',
   LOGIN_ACCOUNT: 'LOGIN_ACCOUNT',
   LOGOUT_ACCOUNT: 'LOGOUT_ACCOUNT',
   SET_USERNAME: 'SET_USERNAME',
   PULL_COORDINATES: 'PULL_COORDINATES',
 }

 export const XActionCreators = {
   // addClick,
   // addLike,
   // setID,
   // addActive,
   login,
   logout,
   setUsername,
   pullCoordinates,
 }

 // function addClick(): Object {
 //   return {
 //     type: XActionTypes.ADD_CLICK,
 //   };
 // }
 //
 // function addActive(): Object {
 //   return {
 //     type: XActionTypes.ADD_ACTIVE,
 //   };
 // }
 //
 // function setID(id: number): Object {
 //   return {
 //     type: XActionTypes.SET_ID,
 //     id: id,
 //   };
 // }
 //
 // function addLike(id: number): Object {
 //   return {
 //     type: XActionTypes.ADD_LIKE,
 //     id: id,
 //   };
 // }

 function setUsername(username: string): Object {
   return {
     type: XActionTypes.SET_USERNAME,
     username: username,
   };
 }

 function login(): Object {
   return {
     type: XActionTypes.LOGIN_ACCOUNT,
   };
 }

 function logout(): Object {
   return {
     type: XActionTypes.LOGOUT_ACCOUNT,
   };
 }

 function pullCoordinates(latitude: number, longitude: number): Object {
   return {
     type: XActionTypes.PULL_COORDINATES,
     latitude: latitude,
     longitude: longitude,
   };
 }
