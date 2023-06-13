var connection = require('../config/config.bd')

var Taxi = function (Taxi) {

    this.model_id = Taxi.model_id;
    this.driver_passport_number = Taxi.driver_passport_number;
    this.plate_number = Taxi.plate_number;
    this.manufacture_year = Taxi.manufacture_year;
    this.active = Taxi.active
}

Taxi.create = function (newTx, result) {
    connection.query("INSERT INTO Taxi set ?", newTx, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId)
        }
    })
}

Taxi.findById = (id, result) => {
    connection.query("SELECT * from Taxi where id = ?", id, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Taxi.findAll = function (result) {
    connection.query("SELECT * from Taxi", (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}
Taxi.update = (id, tx, result) => {
    connection.query("UPDATE Taxi set ? where id = ?", [tx, id], (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}
Taxi.delete = (id, result) => {
    connection.query("DELETE FROM Taxi where id = ?", id, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = Taxi;