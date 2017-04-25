export function mapCenter(coordinates) {
  return {
    type: 'MAP_CENTER',
    coordinates
  };
}

export function mapCenterUpdate(coordinates) {
  return (dispatch) => {
    dispatch(mapCenter(coordinates));
  };
}

export function mapMarkerSelected(mapMarker) {
  return {
    type: 'MAP_MARKER_SELECTED',
    mapMarker
  };
}

// export function mapMarkerUnselected() {
//   return {
//     type: 'MAP_MARKER_UNSELECTED',
//     mapMarkerUnselected
//   };
// }

export function mapMarkerUpdate(mapMarker) {
  return (dispatch) => {
    dispatch(mapMarkerSelected(mapMarker));
  };
}

export function mapDate(date) {
  return {
    type: 'MAP_DATE',
    date
  };
}

// export function mapMarkerUnselected() {
//   return {
//     type: 'MAP_MARKER_UNSELECTED',
//     mapMarkerUnselected
//   };
// }

export function mapDateUpdate(date) {
  return (dispatch) => {
    dispatch(mapDate(date));
  };
}
