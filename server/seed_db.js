const schedule = require('./data/mobileFoodSchedule.js');
const permits = require('./data/truckPermits.js');

console.log('GOT IT');
console.log('supertest', (permits.permits.data));


// permit is at index 17 in the array
// food items is index 19
// EXAMPLE RETURN OBJ
// { permit: '17MFF-0179',
//   food_category: 'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks' }

permits.permits.data.forEach((permit) => {
  const permitInfo = {
    permit: permit[17],
    food_category: permit[19]
  };
  console.log(permitInfo);
});

// console.log('supertestTWO', (schedule.schedule.data))
// schedule.schedule.data.forEach(function(schedule){
//   console.log(schedule);
// });
