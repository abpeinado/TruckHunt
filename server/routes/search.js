const Search = require('../models/search.js');
const utils = require('../utils.js');

module.exports = (req, res) => {
  const timeAsNum = utils.convertTimeToNumber(req.body.date.time);
  Search.scheduleData(timeAsNum, req.body.date.dayOfWeek)
    .then((response) => {
      const newArr = [];
      for (let i = 0; i < response.length; i++) {
        const tempItem = response[i];
        tempItem.coordinates = JSON.parse(tempItem.coordinates);
        newArr.push(tempItem);
      }
      return newArr;
    })
    .then((newArr) => res.send(newArr))
    .catch((error) => res.send(error));
};
