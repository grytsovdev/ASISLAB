var connection = require('../config/config.bd')

var Driver = function (driver) {
    this.passport_number = driver.passport_number;
    this.pib = driver.pib;
    this.date_of_birth = driver.date_of_birth;
    this.gender = driver.gender;
    this.driving_experience = driver.driving_experience;
}

Driver.create = function (newDr, result) {
    connection.query("INSERT INTO Driver set ?", newDr, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId)
        }
    })
}

Driver.findById = (id, result) => {
    connection.query("SELECT * from Driver where passport_number = ?", id, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Driver.findAll = function (result) {
    connection.query("SELECT * from Driver", (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}
Driver.update = (id, dr, result) => {
    connection.query("UPDATE Driver set ? where passport_number = ?", [dr, id], (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}
Driver.delete = (id, result) => {
    connection.query("DELETE FROM Driver where passport_number = ?", id, (err, res) => {
        if (err) {
            console.log("error", err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

module.exports = Driver;