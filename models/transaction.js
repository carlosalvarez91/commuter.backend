//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var transactionSchema = new mongoose.Schema({
  amount: {
        type: Number
    }
});

//Return model
module.exports = restful.model('Transactions', transactionSchema);