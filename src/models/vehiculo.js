const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Vehiculo = sequelize.define('Vehiculo', {
    id_placa: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    kilometraje: {
        type: DataTypes.DOUBLE
    },
    fk_id_categoria: {
        type: DataTypes.INTEGER
    },
    fk_id_tarjeta_propiedad: {
        type: DataTypes.INTEGER
    }
},{
    timestamps: false,
    freezeTableName: true
}, );

module.exports = Vehiculo;
