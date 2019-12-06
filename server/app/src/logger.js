var winston = require('winston'),
    config = require('config/conf.json');

exports.logger = new (winston.Logger)({
    transports: [
        new (winston.transports.DailyRotateFile)({
            filename: config.logger.directory + '/nh.log',
            json: false,
            datePattern: '.dd-MM-yyyy',
            level: config.logger.level,
            maxsize: 104857600 }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});
