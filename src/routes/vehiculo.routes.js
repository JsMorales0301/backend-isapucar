const { Router } = require('express');
const { postVehiculo } = require('../controller/vehiculo.controller');

const router = Router();

router.post('/', postVehiculo);

module.exports = router;