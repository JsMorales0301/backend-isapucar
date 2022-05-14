const sequelize = require('../database/connection');
const { DataTypes } = require('sequelize');

const Cliente = sequelize.define('Cliente', {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    edad:{
        type: DataTypes.INTEGER
    },
    fecha_nacimiento: {
        type: DataTypes.DATE
    },
    telefono: {
        type: DataTypes.STRING
    },
    fk_id_tipo_documento: {
        type: DataTypes.INTEGER
    },
    fk_id_rh: {
        type: DataTypes.INTEGER
    },
    fk_id_nacionalidad: {
        type: DataTypes.INTEGER
    },  
    fk_id_usuario: {
        type: DataTypes.STRING
    }
    
},{
    timestamps: false,
    freezeTableName: true
});

module.exports = Cliente;