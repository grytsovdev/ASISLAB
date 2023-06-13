const express = require('express')

const router = express.Router()

const DriverController = require('../controller/driver.controller')

router.get('/', DriverController.findAll)

router.post('/', DriverController.create)

router.get('/:id', DriverController.findById)

router.post('/put/:id', DriverController.update);

router.get('/delete/:id', DriverController.delete)

module.exports = router;