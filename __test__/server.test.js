const request = require('supertest');
const app = require('../server/server.js');
// const fs = require('fs');
// const path = require('path');

// // helper function that can be used to log a http response to a file
// let logRes = (res, fileName) => {
//   fs.writeFile(path.join(__dirname, fileName), JSON.stringify(res), (err) => {
//     if (err) {
//       console.log('error in server.test.js', err);
//     }
//     // console.log('file written')
//   });
// };

describe('Server end points', () => {
  test('returns 200 from "/" ', () => {
    request(app)
      .get('/')
      .expect(200)
      .end((err) => { // change to err, res to get full status
        if (err) {
          throw err;
        }
        // logRes(res, '/testlog.js');
      });
  });
});

