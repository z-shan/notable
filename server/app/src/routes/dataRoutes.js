var express = require('express');

var routes = function(Data, logger) {
    var dataRouter = express.Router();
    var dataController = require('../controllers/dataController')(Data, logger);

    dataRouter.route('/')
        .get(dataController.get)
        .post(dataController.post);     

    return dataRouter;
};

module.exports = routes;
