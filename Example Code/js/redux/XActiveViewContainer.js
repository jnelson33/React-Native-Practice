/**
 * @flow
 * @providesModule XActiveViewContainer
 */
"use strict";

import { connect } from 'react-redux';
import { XActionCreators } from 'XReduxActions';
import XActiveView from 'XActiveView';

const mapStateToProps = (state: any, ownProps: any) => {
  const active = state.active.get('active');
  return {
    active: active,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addActive: (addActive: number): void => {
      dispatch(XActionCreators.addActive());
    }
  };
}

const XActiveViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(XActiveView);

export default XActiveViewContainer;
