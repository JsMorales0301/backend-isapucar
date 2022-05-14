const { Router } = require('express');
const { postVehiculo, getVehiculo, getVehiculos,putUsuario, putVehiculo } = require('../controller/vehiculo.controller');

const router = Router();

router.post('/', postVehiculo);
router.get('/:id_placa', getVehiculo);
router.get('/', getVehiculos);
router.put('/:id_placa', putVehiculo);


module.exports = router;