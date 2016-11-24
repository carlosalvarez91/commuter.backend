//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var userSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
     },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    active: {
      type: Boolean,
    },
 //    transactions: {
 //    collection: 'transactions',
 //    via: 'users'
 //    }
});

//Return model
module.exports = restful.model('Users', userSchema);