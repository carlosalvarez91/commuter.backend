//Dependencies

var express = require('express');
var router = express.Router();

// Models
var Item = require('../models/item');
var User = require('../models/user');
var Transaction = require('../models/transaction');

//Routes
Item.methods(['get','put','post','delete']);
Item.register(router, '/items');

User.methods(['get','put','post','delete']);
User.register(router, '/users');

Transaction.methods(['get','put','post','delete']);
Transaction.register(router, '/transactions');




//Return router
module.exports = router;