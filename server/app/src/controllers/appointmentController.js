const _ = require('lodash');
var appointmentController = function(Appointment, logger) {
    
    var getByPhysicianId = function(req, res) {
        // Appointment.find({"physicianId": req.query.physicianId}, function(err, result) {
        //     if(err) {
        //         logger.error('Failed to fetch data ', err);
        //         res.status(500).send(err);
        //     } else {
        //         res.status(200).send(result);
        //     }
        // });
        const appointments = [
            {
                _id: 1,
                physicianId: 1,
                name: 'Sterling Archer',
                time: '8:00 AM',
                kind: 'New Patient'
            },
            {
                _id: 2,
                physicianId: 1,
                name: 'Cyril Figis',
                time: '8:30 AM',
                kind: 'Follow-up'
            },
            {
                _id: 3,
                physicianId: 2,
                name: 'Lana Kane',
                time: '9:30 AM',
                kind: 'New Patient'
            },
            {
                _id: 4,
                physicianId: 3,
                name: 'Hope Good',
                time: '10:45 AM',
                kind: 'New Patient'
            },
            {
                _id: 4,
                physicianId: 3,
                name: 'Cape Tees',
                time: '10:30 AM',
                kind: 'Follow-up'
            }
        ];

        return res.status(200).send({result: _.filter(appointments, {physicianId: parseInt(req.params.physicianId)})});
    };

    return {
        getByPhysicianId : getByPhysicianId
    };
};

module.exports = appointmentController;
