const Cars = require('./cars-model');

module.exports = {
    id,
    content
};

function id (req, res, next) {
    if (req.params.id) {
        Cars.get(req.params.id)
        .then(car => {
            if (!car) {
                res.status(404).json({ message: 'Car ID not found.' })
            } else {
                req.car = car;
                next();
            };
        });
    } else {
        next();
    }
};

function content(req, res, next) {
    if (Object.keys(req.body).length < 1 ) {
        res.status(400).json({ message: 'Please provide car information'})
    } else if (!req.body.vin || req.body.vin.length !== 17) {
        res.status(400).json({ message: 'Please provide valid VIN information'})
    } else if (!req.body.make || req.body.make.length < 3) {
        res.status(400).json({ message: 'Please provide valid manufacturer information'})
    } else if (!req.body.model || req.body.model.length < 2) {
        res.status(400).json({ message: 'Please provide valid model information'})
    } else if (!req.body.mileage || req.body.mileage < 1) {
        res.status(400).json({ message: 'Please provide valid mileage information'})
    } else {
        next();
    };
};