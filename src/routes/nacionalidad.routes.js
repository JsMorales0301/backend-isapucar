const { Router } = require('express');
const { getUser } = require('../controller/nacionalidad.controller');

const router = Router();

router.get('/', getUser);

module.exports = router;