const Vendor = require('../server/models/vendors.js');
const { db } = require('../database/index.js');

const testVendor = {
  vendor_name: 'BH & MT LLC',
  permit_number: '17MFF-0125',
  food_category: 'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages'
};

describe('vendors table', () => {
  it('should have a vendors table', (done) => {
    db.any('SELECT * FROM vendors')
      .then(() => {
        done();
      })
      .catch((error) => {
        expect(error).toBeUndefined();
        done();
      });
  });

  it('should find vendor permits and IDs', () => {
    return Vendor.findVendorPermitsAndIds()
      .then((vendors) => {
        expect(vendors.length > 1).toEqual(true);
        expect(vendors[0].permit_number).toBeDefined();
        expect(vendors[0].vendor_id).toBeDefined();
      });
  });

  it('should find vendor IDs', () => {
    return Vendor.findVendorIds()
      .then((vendors) => {
        expect(vendors.length > 0).toEqual(true);
        expect(vendors[0].vendor_id).toBeDefined();
      });
  });

  it('should find vendor by permit number', () => {
    return Vendor.findVendorIdByPermitNumber(testVendor.permit_number)
      .then((vendor) => {
        expect(vendor.vendor_id).toBeDefined();
      });
  });
});
