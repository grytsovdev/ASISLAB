const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Taxi_Service'
})

connection.connect(function (err) {
    if (!err) console.log('database is connected')
    else console.log('Error while connecting to the database')
})

module.exports = connection;