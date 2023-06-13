const express = require('express')

const router = express.Router()

const TaxiController = require('../controller/taxi.controller')

router.get('/', TaxiController.findAll)

router.post('/', TaxiController.create)

router.get('/:id', TaxiController.findById)

router.post('/put/:id', TaxiController.update);

router.get('/delete/:id', TaxiController.delete)

module.exports = router;