const { db } = require('../../database/index.js');

module.exports.scheduleData = (time, day) => {
  return db.query('SELECT v.vendor_name, v.food_category, v.phone_number, s.day_of_week, s.start_time, s.end_time, s.coordinates from vendors as v inner join schedules as s on v.vendor_id = s.vendor_id where end_time > $1 AND start_time <= $1 AND day_of_week = $2', [time, day]);
};

// module.exports.scheduleData = () => {
//   return db.query('SELECT v.vendor_name, v.food_category, v.phone_number, s.day_of_week, s.start_time, s.end_time, s.coordinates from vendors as v inner join schedules as s on v.vendor_id = s.vendor_id;');
// };
