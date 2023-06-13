const express = require('express')

const router = express.Router()

const CarModelController = require('../controller/car_model.controller')

router.get('/', CarModelController.findAll)

router.post('/', CarModelController.create)

router.get('/:id', CarModelController.findById)

router.put('/:id', CarModelController.update);

router.delete('/:id', CarModelController.delete)

module.exports = router;