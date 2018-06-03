/**
 * @flow
 * @providesModule XUserLocationContainer
 */
 "use strict";

import { connect } from 'react-redux';
import { XActionCreators } from 'XReduxActions';
import XUserLocation from 'XUserLocation';

const mapStateToProps = (state: any, ownProps: any) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (latitude: number, longitude: number): void => {
      dispatch(XActionCreators.pullCoordinates(latitude, longitude));
    }
  };
}

const XStateViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
) (XUserLocation);

export default XStateViewContainer;
