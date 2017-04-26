module.exports.convertTimeToNumber = (timeAsString) => {
  let time;
  if (timeAsString[timeAsString.length - 2] === 'A') {
    if (!!Number(timeAsString[1]) === false && Number(timeAsString[1]) !== 0) {
      time = Number(timeAsString[0]);
    } else if (Number(timeAsString[0] + timeAsString[1]) !== 12) {
      time = Number(timeAsString[0] + timeAsString[1]);
    } else {
      time = 24;
    }
  } else if (timeAsString[timeAsString.length - 2] === 'P') {
    if (!!Number(timeAsString[1]) === false && Number(timeAsString[1]) !== 0) {
      time = Number(timeAsString[0]) + 12;
    } else if (Number(timeAsString[0] + timeAsString[1]) !== 12) {
      time = Number(timeAsString[0] + timeAsString[1]) + 12;
    } else {
      time = 12;
    }
  }
  return time;
};

// module.exports.convertTimeToNumber = (timeAsString) => {
//   console.log(timeAsString);
//   let time;
//   if (timeAsString[timeAsString.length - 2] === 'A') {
//     if (timeAsString[1] === 'A') {
//       time = Number(timeAsString[0]);
//     } else if (Number(timeAsString[0] + timeAsString[1]) !== 12) {
//       time = Number(timeAsString[0] + timeAsString[1]);
//     } else {
//       time = 24;
//     }
//   } else if (timeAsString[timeAsString.length - 2] === 'P') {
//     if (timeAsString[1] === 'P') {
//       time = Number(timeAsString[0]) + 12;
//     } else if (Number(timeAsString[0] + timeAsString[1]) !== 12) {
//       time = Number(timeAsString[0] + timeAsString[1]) + 12;
//     } else {
//       time = 12;
//     }
//   }
//   console.log(time);
//   return time;
// };

module.exports.convertOrderItemsToOrder = orderItems => {
  const orders = [];
  const ordersHash = {};

  orderItems.forEach(orderItem => {
    // if OI doesnt exist in hash
    if (!ordersHash[orderItem.order_id]) {
      const {
        order_id,
        customer_email,
        order_time,
        date_part,
        price_total,
        order_status,
        menu_item_id,
        name,
        price,
        quantity,
        item_note } = orderItem;

      const order = {
        order_id,
        customer_email,
        order_time,
        order_time_epoch: date_part,
        price_total,
        order_status
      };

      const item = {
        menu_item_id,
        name,
        price,
        quantity,
        item_note
      };

      orders.push(order);
      ordersHash[orderItem.order_id] = [item];
    } else {
      // push OI to array in hash
      ordersHash[orderItem.order_id].push(orderItem);
    }
  });

  // sort orders by time
  orders.sort((a, b) => {
    return a.order_time_epoch - b.order_time_epoch;
  });

  // map items in hash table to orders
  const ordersWithItems = [];
  orders.forEach(order => {
    const orderWithItems = order;
    orderWithItems.items = ordersHash[order.order_id];
    ordersWithItems.push(orderWithItems);
  });

  return ordersWithItems;
};
