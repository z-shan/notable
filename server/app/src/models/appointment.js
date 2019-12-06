// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
var appointmentModel = new Schema({
    physicianId: {type: Schema.Types.ObjectId, ref: 'Physician'},
    name: {type: String},
    time: {type: String},
    kind: {type: String}
});

module.exports = mongoose.model('appointments', appointmentModel);
