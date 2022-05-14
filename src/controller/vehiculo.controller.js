const { request, response } = require('express');
const Vehiculo = require('../models/vehiculo');


const postVehiculo = async(req = request, res = response) => {
    
    const { body } = req;

    const vehiculo = new Vehiculo(body);

    await vehiculo.save();

    // res.json({
    //     vehiculo
    // });
    
}

module.exports = {
    postVehiculo
}