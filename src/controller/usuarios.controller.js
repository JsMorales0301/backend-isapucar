const { request, response } = require('express');
const res = require('express/lib/response');
const Usuarios = require('../models/usuarios');

const postUsuarios = async(req = request, res = response) => {
    
    const { body } = req;

    const usuarios = new Usuarios(body);

    await usuarios.save();

    res.json({
        msg: '¡Usuario creado correctamente!'
    });
}

const getUserById = async(req = request, res = response) => {
    
    const { id_usuario } = req.params;
    
    const usuario = await Usuarios.findByPk(id_usuario);

    res.json({
        usuario
    });

}



module.exports = {
    postUsuarios,
    getUserById
}