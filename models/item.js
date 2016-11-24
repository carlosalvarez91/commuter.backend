//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var itemSchema = new mongoose.Schema({
    name: String,
    price: Number
});

//Return model
module.exports = restful.model('Items', itemSchema);