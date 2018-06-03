/**
 * @flow
 * @providesModule XStateViewContainer
 */
 "use strict";

import { connect } from 'react-redux';
import { XActionCreators } from 'XReduxActions';
import XLoginButton from 'XLoginButton';
import XLogoutButton from 'XLoginButton';

const mapStateToProps = (state: any, ownProps: any) => {
  const login = state.applicationState.get('login');
  return {
    login: login,
    navigation: ownProps.navigation,
    pickDirection: ownProps.pickDirection,
    username: ownProps.username,
    password: ownProps.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeActive: () => {
      dispatch(XActionCreators.login());
    },
    makeInactive: () => {
      dispatch(XActionCreators.logout());
    },
    setUsername: (username: string): void => {
      dispatch(XActionCreators.setUsername(username));
    }


  };
}

const XStateViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
) (XLoginButton);

export default XStateViewContainer;
