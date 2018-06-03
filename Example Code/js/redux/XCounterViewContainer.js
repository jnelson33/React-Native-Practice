/**
 * @flow
 * @providesModule XCounterViewContainer
 */
 "use strict";

import { connect } from 'react-redux';
import { XActionCreators } from 'XReduxActions';

import XCounterView from 'XCounterView';

const mapStateToProps = (state: any, ownProps: any) => {
  const count = state.users.getIn(['counter', 'clicks']);
  return {
    count: count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(XActionCreators.addClick());
    },
    addLick: (id: number) => {
      dispatch(XActionCreators.addLike(id));
    }
  };
}

const XCounterViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(XCounterView);

export default XCounterViewContainer;
