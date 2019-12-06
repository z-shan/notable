'use strict';

const _ = require('lodash');
const uuid = require('uuid');
const logger = require('logger').logger;

const requestIDMiddlware = function(req, res, next) {
    if(_.isEmpty(req.reqId)) {
        req.reqId = uuid.v1();
    }
    else {
        logger.warn('Id already set for request', req.reqId);
    }

    next();
};

module.exports = requestIDMiddlware;
