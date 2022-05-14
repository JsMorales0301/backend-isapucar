const { request, response } = require('express');
const Usuarios = require('../models/usuarios');

const login = async(req = request, res = response) => {
    const { id_usuario, password } = req.body;

    const user = await Usuarios.findAll({
        where: {
          id_usuario: id_usuario,
          password: password
        }
    });

    if(user.length > 0){
        res.status(200).json({
            msg: 'Inicio de sesión correcto'
        })
    } else {
        res.status(404).json({
            msg: 'Inicio de sesión incorrecto'
        })
    }

    
    

}

module.exports = {
    login
}