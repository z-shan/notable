var express = require('express');

var routes = function(Appointment, logger) {
    var appointmentRouter = express.Router();
    var appointmentController = require('../controllers/appointmentController')(Appointment, logger);

    appointmentRouter.route('/physician/:physicianId')
        .get(appointmentController.getByPhysicianId);

    return appointmentRouter;
};

module.exports = routes;
