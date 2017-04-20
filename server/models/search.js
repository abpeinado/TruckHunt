const { db } = require('../../database/index.js');

module.exports.scheduleData = () => {
  return db.query('SELECT v.vendor_name, v.food_category, v.phone_number, s.day_of_week, s.start_time, s.end_time, s.coordinates from vendors as v inner join schedules as s on v.vendor_id = s.vendor_id;');
};
