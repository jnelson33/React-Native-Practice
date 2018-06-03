/**
 * @flow
 * @providesModule XIdEditorViewContainer
 */
 "use strict";

import { connect } from 'react-redux';
import { XActionCreators } from 'XReduxActions';
import XIdEditorView from 'XIdEditorView';

const mapStateToProps = (state: any, ownProps: any) => {
  const id = state.session.get('id');
  return {
    id: id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id: number): void => {
      dispatch(XActionCreators.setID(id));
    }
  };
}

const XIdEditorViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(XIdEditorView);

export default XIdEditorViewContainer;
