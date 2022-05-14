const { request, response } = require('express');


const getUser = (req = request, res = response) => {
    
    const { name, apellido, email } = req.body;
    
    const newUsuario = save();

    
}

module.exports = {
    getUser
}