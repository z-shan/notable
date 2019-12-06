// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var physicianModel = new Schema({
    firstName : {type : String},
    lastName : {type : String},
    email: {type: String}
});

module.exports = mongoose.model('physicians', physicianModel);
