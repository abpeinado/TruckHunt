const schedule = require('./data/mobileFoodSchedule.js');
const permits = require('./data/truckPermits.js');
const Vendors = require('./models/vendors.js');
const Schedules = require('./models/schedules.js');

//  --------POPULATING PERMIT INFO-----------
// permit is at index 17 in the array
// food items is index 19

// EXAMPLE RETURN OBJ
// { permit: '17MFF-0179',
//   food_category: 'Cold Truck: Pre-packaged Sandwiches: Various Beverages: Salads: Snacks' }

permits.permits.data.forEach((permit) => {
  const permitInfo = {
    permit_number: permit[17],
    food_category: permit[19],
    checkPermitApproved: permit[18]
  };
  if (permitInfo.checkPermitApproved === 'APPROVED') {
    Vendors.newVendor(permitInfo);
  }
});

// ---------POPULATING SCHEDULE INFO----------
// Day_of_week is at index 8 in array
// start_time is at index 10
// end_time is at index 11
// coordinates is at index 31

// EXAMPLE RETURN OBJ
// { day_of_week: '3',
//   start_time: '10AM',
//   end_time: '11AM',
//   location: { lat: '37.7111783070436', long: '-122.403573115181' } }

schedule.schedule.data.forEach((s) => {
  return Vendors.findVendorIdByPermitNumber(s[12])
    .then((vendorId) => {
      if (vendorId.vendor_id) {
        console.log('vendorId: ', vendorId.vendor_id);
        const scheduleInfo = {
          day_of_week: s[8],
          start_time: s[10],
          end_time: s[11],
          coordinates: {
            lat: s[31][1],
            long: s[31][2]
          },
          vendor_id: vendorId.vendor_id
        };
        Schedules.newSchedule(scheduleInfo);
      }
    })
    .catch((error) => {
      console.log('error: ', error);
    });
});
