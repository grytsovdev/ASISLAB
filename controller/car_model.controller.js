const CarModel = require('../model/car_model.model')

exports.findAll = (req, res) => {
    CarModel.findAll((err, carModel) => {
        if (err) res.send(err);
        res.render('car_model.ejs', { CarModel: carModel })
    })
}
exports.findById = (req, res) => {
    CarModel.findById(req.params.id, (err, carModel) => {
        if (err) res.send(err)
        res.render('car_model_edit.ejs', { CarModel: carModel })
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
            res.redirect('/api/car_model')
        })
    }
}
exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: false, message: "Please provide all required fields" })
    } else {
        CarModel.update(req.params.id, new CarModel(req.body), (err, CarModel) => {
            if (err) res.send(err);
            res.redirect('/api/car_model')

        })
    }
}

exports.delete = (req, res) => {
    CarModel.delete(req.params.id, (err, CarModel) => {
        if (err) res.send(err)
        res.redirect('/api/car_model')
    })
}

