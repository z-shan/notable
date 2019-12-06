// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var dataModel = new Schema({
    name: {type: String}
    // firstName : {type : String, required: true},
    // lastName : {type : String, required: true},
    // username : {type : String, unique: true, required: true },
    // password : {type : String, required: true},
    // providerName: {type : String, required: true}, //hospital
    // designation: {type : String, required: true}
});

module.exports = mongoose.model('users', dataModel);
