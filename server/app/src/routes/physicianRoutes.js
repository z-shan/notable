var express = require('express');

var routes = function(Physician, logger) {
    var physicianRouter = express.Router();
    var physicianController = require('../controllers/physicianController')(Physician, logger);

    physicianRouter.route('/')
        .get(physicianController.getAll);   

    return physicianRouter;
};

module.exports = routes;
