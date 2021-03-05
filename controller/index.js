const CarModel = require('../model/index');

module.exports = {
        list: async (req, res) => {
               await CarModel.find((err, car) => {
                    if (err) {
                        res.status(500).json({
                            messgae: "There was an error",
                            error: err
                        });
                    }
                   return res.json(car);
                })
        },
        show: async(req, res) => {
            await CarModel.find({"type.make": req.params.make}, (err, cars) => {
                if (err) {
                    res.status(404).json({
                        message: "There was an error",
                        error: err
                    });
                }
                if (!cars) {
                    res.status(404).json({
                        message: "There was an error",
                        error: err
                    });
                }
               return res.json(cars);
            });
        },
            create: async (req, res) => {
               let vehicle = new CarModel({
                    'type.make': req.body.make,
                    'type.model': req.body.model,
                    'color': req.body.color
                });
             await vehicle.save((err, car) => {
                    if (err) {
                        res.status(500).json({
                            message: " OOPSIES",
                            error: err
                        });
                    }
                    return res.status(201).json(car);
                });
            }
}