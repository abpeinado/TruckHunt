const schedule = require('./data/mobileFoodSchedule.js');
const permits = require('./data/truckPermits.js');

console.log('GOT IT');
console.log('supertest', (permits.permits.data));


//  --------POPULATING PERMIT INFO-----------

// permit is at index 17 in the array
// food items is index 19
// EXAMPLE RETURN OBJ
// { permit: '17MFF-0179',
//   food_category: 'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks' }

// permits.permits.data.forEach((permit) => {
//   const permitInfo = {
//     permit: permit[17],
//     food_category: permit[19]
//   };
//   console.log(permitInfo);
// });


// ---------POPULATING SCHEDULE INFO----------
// Day_of_week is at index 8 in array
// start_time is at index 10
// end_time is at index 11
// location is at index
// EXAMPLE RETURN OBJ

// { day_of_week: '3',
//   start_time: '10AM',
//   end_time: '11AM',
//   location: { lat: '37.7111783070436', long: '-122.403573115181' } }

// console.log('supertestTWO', (schedule.schedule.data));
schedule.schedule.data.forEach((s) => {
  const scheduleInfo = {
    day_of_week: s[8],
    start_time: s[10],
    end_time: s[11],
    location: {
      lat: s[31][1],
      long: s[31][2]
    }
  };
  console.log(scheduleInfo);
});
