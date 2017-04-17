const permits = require('./data/truckPermits.js');
const Vendors = require('./models/vendors.js');

const approvedPermits = {};
const seedVedorsTable = () => {
  permits.permits.data.forEach((permit) => {
    const permitInfo = {
      vendor_name: permit[9],
      permit_number: permit[17],
      food_category: permit[19],
      checkPermitApproved: permit[18]
    };
    if (permitInfo.checkPermitApproved === 'APPROVED') {
      if (!approvedPermits[permit[17]]) {
        approvedPermits[permit[17]] = permit[17];
        Vendors.newVendor(permitInfo)
          .catch((error) => {
            console.log('error: ', error);
          });
      }
    }
  });
};

seedVedorsTable();
