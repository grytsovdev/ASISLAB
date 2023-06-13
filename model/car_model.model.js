var connection = require('../config/config.bd')

var CarModel = function (CarModel) {

    this.model_name = CarModel.model_name;
    this.model_description = CarModel.model_description;

}

CarModel.create = function (newCM, result) {
    connection.query("INSERT INTO car_model set ?", newCM, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId)
        }
    })
}

CarModel.findById = (id, result) => {
    connection.query("SELECT * from car_model where id = ?", id, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

CarModel.findAll = function (result) {
    connection.query("SELECT * from car_model", (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}
CarModel.update = (id, cm, result) => {
    connection.query("UPDATE car_model set ? where id = ?", [cm, id], (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}
CarModel.delete = (id, result) => {
    connection.query("DELETE FROM car_model where id = ?", id, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = CarModel;