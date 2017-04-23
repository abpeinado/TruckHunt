export function truckSelected(truck) {
  console.log('truck selected: ', truck);
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
