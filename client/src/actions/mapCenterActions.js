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
