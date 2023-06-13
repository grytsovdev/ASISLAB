const Driver = require('../model/driver.model')

exports.findAll = (req, res) => {
    Driver.findAll((err, driver) => {
        if (err) res.send(err);
        res.render('driver.ejs', { Driver: driver })
    })
}
exports.findById = (req, res) => {
    Driver.findById(req.params.id, (err, driver) => {
        if (err) res.send(err)
        res.render('driver_edit.ejs', { Driver: driver })
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
            res.redirect('/api/driver')
        })
    }
}
exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length == 0) {
        res.status(400).send({ error: false, message: "Please provide all required fields" })
    } else {
        Driver.update(req.params.id, new Driver(req.body), (err, driver) => {
            if (err) res.send(err);
            res.redirect('/api/driver')
        })
    }
}

exports.delete = (req, res) => {
    Driver.delete(req.params.id, (err, driver) => {
        if (err) res.send(err)
        res.redirect('/api/driver')
    })
}

