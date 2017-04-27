module.exports.search = require('./routes/search.js');

module.exports.menu = require('./routes/menu.js');

module.exports.vendorSignup = require('./routes/vendorSignup.js');

module.exports.vendorLogin = require('./routes/vendorLogin.js');

module.exports.userLogin = require('./routes/userLogin.js');

module.exports.userSignup = require('./routes/userSignup.js');

module.exports.authenticate = require('./routes/stripeAuthorization.js');

module.exports.stripe = require('./routes/stripeCallback.js');

module.exports.checkout = require('./routes/checkout.js');

module.exports.vendorIncomingOrders = require('./routes/vendorIncomingOrders.js');

module.exports.orderStatus = require('./routes/orderStatus.js');
