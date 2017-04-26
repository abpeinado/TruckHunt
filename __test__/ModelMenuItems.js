require('dotenv').config();

process.env.DATABASE_URL = 'postgres://@localhost:5432/toadstest';

const Vendor = require('../server/models/vendors.js');
const { db, loadDb } = require('../database/index.js');

const testVendor = {
  vendor_name: 'BH & MT LLC',
  permit_number: '17MFF-0125',
  food_category: 'Cold Truck: Breakfast: Sandwiches: Salads: Pre-Packaged Snacks: Beverages'
};

const resetDb = () => (
  db.none('TRUNCATE vendors RESTART IDENTITY CASCADE')
);

beforeAll(() => (
  loadDb(db)
));

afterAll(() => (
  resetDb()
));

describe('menu_items table', () => {
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

  it('should add a new vendor into the table', () => {
    return Vendor.newVendor(testVendor)
      .then((vendor) => {
        expect(vendor.vendor_id).toBeDefined();
        expect(vendor.vendor_name).toEqual(testVendor.vendor_name);
      });
  });

  it('should find vendor permits and IDs', () => {
    return Vendor.findVendorPermitsAndIds()
      .then((vendor) => {
        expect(vendor[0].vendor_id).toEqual(testVendor.vendor_name);
        expect(vendor[0].vendor_name).toEqual(testVendor.vendor_name);
      });
  });

  it('should find vendor IDs', () => {
    return Vendor.findVendorIds()
      .then((vendor) => {
        expect(vendor[0].vendor_id).toEqual(testVendor.vendor_name);
      });
  });

  it('should find vendor by permit number', () => {
    return Vendor.findVendorIdByPermitNumber(testVendor.permit_number)
      .then((vendor) => {
        expect(vendor.permit_number).toEqual(testVendor.permit_number);
      });
  });
});
