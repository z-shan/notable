var dataController = function(Data, logger) {
    
    var get = function(req, res) {
        Data.find({}, function(err, result) {
            if(err) {
                logger.error('Failed to fetch data ', err);
                res.status(500).send(err);
            } else {
                res.status(200).send(result);
            }
        });
    };

    var post = function(req, res) {
        res.status(200).send({"result": "done"});
    };

    return {
        get : get,
        post : post
    };
};

module.exports = dataController;
