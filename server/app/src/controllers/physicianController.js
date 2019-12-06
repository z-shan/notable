const _ = require('lodash');
var physicianController = function(Physician, logger) {
    
    var getAll = function(req, res) {
        // Physician.find({}, function(err, result) {
        //     if(err) {
        //         logger.error('Failed to fetch data ', err);
        //         res.status(500).send(err);
        //     } else {
        //         res.status(200).send({result: result});
        //     }
        // });

        const physicians = [
            {
                _id: 1,
                firstName: 'Hibber',
                lastName: 'Julius',
                email: 'hjulius@premed.com'
            },
            {
                _id: 2,
                firstName: 'Rivera',
                lastName: 'Nick',
                email: 'rnick@premed.com'
            },
            {
                _id: 3,
                firstName: 'John',
                lastName: 'Doe',
                email: 'jdoe@premed.com'
            }
        ];
        
        return res.status(200).send({result: physicians});
    };

    return {
        getAll : getAll
    };
};

module.exports = physicianController;
