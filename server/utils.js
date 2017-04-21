module.exports.convertTimeToNumber = (timeAsString) => {
  let time;
  if (timeAsString[timeAsString.length - 2] === 'A') {
    if (!!Number(timeAsString[1]) === false && Number(timeAsString[1]) !== 0) {
      time = Number(timeAsString[0]);
    } else if (Number(timeAsString[0] + timeAsString[1]) !== 12) {
      time = Number(timeAsString[0] + timeAsString[1]);
    } else {
      time = 24;
    }
  } else if (timeAsString[timeAsString.length - 2] === 'P') {
    if (!!Number(timeAsString[1]) === false && Number(timeAsString[1]) !== 0) {
      time = Number(timeAsString[0]) + 12;
    } else if (Number(timeAsString[0] + timeAsString[1]) !== 12) {
      time = Number(timeAsString[0] + timeAsString[1]) + 12;
    } else {
      time = 12;
    }
  }
  return time;
};

// module.exports.convertTimeToNumber = (timeAsString) => {
//   console.log(timeAsString);
//   let time;
//   if (timeAsString[timeAsString.length - 2] === 'A') {
//     if (timeAsString[1] === 'A') {
//       time = Number(timeAsString[0]);
//     } else if (Number(timeAsString[0] + timeAsString[1]) !== 12) {
//       time = Number(timeAsString[0] + timeAsString[1]);
//     } else {
//       time = 24;
//     }
//   } else if (timeAsString[timeAsString.length - 2] === 'P') {
//     if (timeAsString[1] === 'P') {
//       time = Number(timeAsString[0]) + 12;
//     } else if (Number(timeAsString[0] + timeAsString[1]) !== 12) {
//       time = Number(timeAsString[0] + timeAsString[1]) + 12;
//     } else {
//       time = 12;
//     }
//   }
//   console.log(time);
//   return time;
// };
