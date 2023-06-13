const Driver = require('../model/driver.model')

exports.findAll = (req, res) => {
    Driver.findAll((err, driver) => {
        if (err) res.send(err);
        res.send(driver);
    })
}
exports.findById = (req, res) => {
    Driver.findById(req.params.id, (err, driver) => {
        if (err) res.send(err)
        res.json(driver);
    })
}

exports.create = function (req, res) {
    console.log(req.body)
    const new_driver = new Driver(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: false, message: "Please provide all required fields" })
    } else {
        Driver.create(new_driver, (err, driver) => {
            if (err) res.send(err);
            res.json({ error: false, message: "Driver created succefully", data: driver })
        })
    }
}
exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: false, message: "Please provide all required fields" })
    } else {
        Driver.update(req.params.id, new Driver(req.body), (err, driver) => {
            if (err) res.send(err);
            res.json({ error: false, message: "Driver updated succefully", data: driver })

        })
    }
}

exports.delete = (req, res) => {
    Driver.delete(req.params.id, (err, driver) => {
        if (err) res.send(err)
        res.json({ error: false, message: "Driver deleted successfully" })
    })
}

