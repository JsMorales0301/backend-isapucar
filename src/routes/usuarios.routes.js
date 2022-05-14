const { Router } = require('express');
const { postUsuarios, getUserById } = require('../controller/usuarios.controller');

const router = Router();

router.post('/', postUsuarios);
router.get('/:id_usuario', getUserById);

module.exports = router;