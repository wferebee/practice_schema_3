const CarModel = require('../model/index.js');

module.exports = {
    list: (req, res) => {
        CarModel.find((err, car) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error while fetching cars',
                    error: err
                });
            }
            return res.json(car);
        })
    },
    show: (req, res) => {
        let carMake = req.params.make;

        CarModel.find({
            'type.make': carMake
        }, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }

            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }

            return res.json(car);
        });
    },
    create: function (req, res) {
        let vehicle = new CarModel({
            'type.make': req.body.make,
            'type.model': req.body.model,
            "color": req.body.color,


        });

        vehicle.save(function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating car',
                    error: err
                });
            }

            return res.status(201).json(car);
        });
    }
}