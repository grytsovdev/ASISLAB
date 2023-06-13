const CarModel = require('../model/car_model.model')

exports.findAll = (req, res) => {
    CarModel.findAll((err, carModel) => {
        if (err) res.send(err);
        res.send(carModel);
    })
}
exports.findById = (req, res) => {
    CarModel.findById(req.params.id, (err, carModel) => {
        if (err) res.send(err)
        res.json(carModel);
    })
}

exports.create = function (req, res) {
    console.log(req.body)
    const new_CarModel = new CarModel(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: false, message: "Please provide all required fields" })
    } else {
        CarModel.create(new_CarModel, (err, CarModel) => {
            if (err) res.send(err);
            res.json({ error: false, message: "CarModel created succefully", data: CarModel })
        })
    }
}
exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: false, message: "Please provide all required fields" })
    } else {
        CarModel.update(req.params.id, new CarModel(req.body), (err, CarModel) => {
            if (err) res.send(err);
            res.json({ error: false, message: "CarModel updated succefully", data: CarModel })

        })
    }
}

exports.delete = (req, res) => {
    CarModel.delete(req.params.id, (err, CarModel) => {
        if (err) res.send(err)
        res.json({ error: false, message: "CarModel deleted successfully" })
    })
}

