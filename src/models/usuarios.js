const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Usuarios = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING
    },
    fk_id_rol:{
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.TINYINT
    }
},{
    timestamps: false,
});

module.exports = Usuarios;