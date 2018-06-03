/**
 * @flow
 * @providesModule XPullUserLocation
 */
 "use strict";

import { connect } from 'react-redux';
import { XActionCreators } from 'XReduxActions';
import XScreenFour from 'XScreenFour';

const mapStateToProps = (state: any, ownProps: any) => {
  const latitude = state.userCoordinates.get('latitude');
  const longitude = state.userCoordinates.get('longitude');
  return {
    UserLocation: {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {    }
  };

const XStateViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
) (XScreenFour);

export default XScreenFour;
