/* eslint import/prefer-default-export: 0 */

export const mapCenter = (state = { lng: -122.408966, lat: 37.783697 }, action) => {
  switch (action.type) {
    case 'MAP_CENTER':
      return action.coordinates;
    default:
      return state;
  }
};

export const mapMarkerSelected = (state = {}, action) => {
  switch (action.type) {
    case 'MAP_MARKER_SELECTED':
      return action.mapMarker;
    default:
      return state;
  }
};

// export const mapMarkerUnselected = (state = {}, action) => {
//   switch (action.type) {
//     case 'MAP_MARKER_UNSELECTED':
//       return action.mapMarkerUnselected;
//     default:
//       return state;
//   }
// };

const currentTime = new Date();
let hour = currentTime.getHours();
const min = currentTime.getMinutes();
let ampm = '';
if (hour > 12) {
  hour = hour - 12;
  ampm = 'PM';
} else {
  ampm = 'AM';
}
const timeFormatted = `${hour}:${min} ${ampm}`;

export const mapDate = (state = { time: timeFormatted, dayOfWeek: 1 }, action) => {
  switch (action.type) {
    case 'MAP_DATE':
      return action.date;
    default:
      return state;
  }
};
