const { convertOrderItemsToOrder, convertTimeToNumber } = require('../server/utils.js');
const rawOrders = require('./testData/rawOrders.js');

describe('convertOrderItemsToOrder', () => {
  let orders;

  beforeEach(() => {
    orders = convertOrderItemsToOrder(rawOrders);
  });
  it('should return an array', () => {
    expect(orders.length).toEqual(2);
  });
  it('should save top level order data for the first order', () => {
    for (let i = 0; i < 2; i++) {
      let j = i;
      if (i === 1) {
        j = 3;
      }
      const { customer_email, order_time, order_time_epoch, price_total, order_status } = orders[i];
      expect(rawOrders[j].customer_email).toEqual(customer_email);
      expect(rawOrders[j].order_time).toEqual(order_time);
      expect(rawOrders[j].date_part).toEqual(order_time_epoch);
      expect(rawOrders[j].price_total).toEqual(price_total);
      expect(rawOrders[j].order_status).toEqual(order_status);
    }
  });
  it('should save the correct number of menu items to each order', () => {
    expect(orders[0].items.length).toEqual(3);
    expect(orders[1].items.length).toEqual(2);
  });
});

describe('convertTimeToNumber', () => {
  it('should convert AM strings to ints', () => {
    const input = '11:58AM';
    const output = convertTimeToNumber(input);
    expect(output).toEqual(11);
  });
  it('should convert PM strings to ints', () => {
    const input = '3:24PM';
    const output = convertTimeToNumber(input);
    expect(output).toEqual(15);
  });
});
