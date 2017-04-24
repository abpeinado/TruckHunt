export function truckSelected(truck) {
  return {
    type: 'TRUCK_SELECTED',
    truck
  };
}

export function truckSelectedUpdate(truck) {
  return (dispatch) => {
    dispatch(truckSelected(truck));
  };
}
