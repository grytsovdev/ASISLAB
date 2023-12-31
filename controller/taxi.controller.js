const Taxi = require('../model/taxi.model')

exports.findAll = (req, res) => {
    Taxi.findAll((err, taxi) => {
        if (err) res.send(err);
        res.send(taxi);
    })
}
exports.findById = (req, res) => {
    Taxi.findById(req.params.id, (err, taxi) => {
        if (err) res.send(err)
        res.json(taxi);
    })
}

exports.create = function (req, res) {
    console.log(req.body)
    const new_Taxi = new Taxi(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: false, message: "Please provide all required fields" })
    } else {
        Taxi.create(new_Taxi, (err, Taxi) => {
            if (err) res.send(err);
            res.json({ error: false, message: "Taxi created succefully", data: Taxi })
        })
    }
}
exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: false, message: "Please provide all required fields" })
    } else {
        Taxi.update(req.params.id, new Taxi(req.body), (err, Taxi) => {
            if (err) res.send(err);
            res.json({ error: false, message: "Taxi updated succefully", data: Taxi })

        })
    }
}

exports.delete = (req, res) => {
    Taxi.delete(req.params.id, (err, Taxi) => {
        if (err) res.send(err)
        res.json({ error: false, message: "Taxi deleted successfully" })
    })
}

