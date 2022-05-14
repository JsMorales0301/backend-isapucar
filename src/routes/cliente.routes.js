const { Router } = require('express');
const { getCliente,getClientes,postCliente,putCliente } = require('../controller/cliente.controller');

const router = Router();

router.post('/', postCliente);
router.get('/:id_cliente', getCliente);
router.get('/', getClientes);
router.put('/:id_cliente', putCliente);

module.exports = router;