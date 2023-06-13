const express = require('express')
const bodyParser = require('body-parser')

const PORT = 5000;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.status(200).json("Server works")
})

const driverRouter = require('./router/driver.router')
const taxiRouter = require('./router/taxi.router')
const carModelRouter = require('./router/car_model.router')
app.use('/api/taxi', taxiRouter)
app.use('/api/car_model', carModelRouter)
app.use('/api/driver', driverRouter)

app.listen(PORT, () => console.log("Server start"))
