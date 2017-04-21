const schedule = require('../data/mobileFoodSchedule.js');
const Vendors = require('../../server/models/vendors.js');
const Schedules = require('../../server/models/schedules.js');
const utils = require('../../server/utils.js');

Vendors.findVendorPermitsAndIds()
  .then((approvedPermits) => {
    schedule.schedule.data.forEach((s) => {
      for (let i = 0; i < approvedPermits.length; i++) {
        if (approvedPermits[i].permit_number === s[12]) {
          const start = utils.convertTimeToNumber(s[10]);
          const end = utils.convertTimeToNumber(s[11]);
          const scheduleInfo = {
            day_of_week: s[8],
            start_time: start,
            end_time: end,
            coordinates: {
              lat: s[31][1],
              long: s[31][2]
            },
            vendor_id: approvedPermits[i].vendor_id
          };
          Schedules.newSchedule(scheduleInfo);
        }
      }
    });
  })
  .catch((error) => {
    console.log('error: ', error);
  });

// ---------POPULATING SCHEDULES INFO----------
// Day_of_week is at index 8 in array
// start_time is at index 10
// end_time is at index 11
// coordinates is at index 31

// EXAMPLE RETURN OBJ
// { day_of_week: '3',
//   start_time: '10AM',
//   end_time: '11AM',
//   location: { lat: '37.7111783070436', long: '-122.403573115181' } }
