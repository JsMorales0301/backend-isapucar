

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
const getVehiculos =async(req = request, res = response )=>{
    const vehiculos = await Vehiculo.findAll();
    res.json({vehiculos});
}

 const getVehiculo  = async(req = request, res = response)=>{
    const { id_placa } = req.params;
    const vehiculo = await Vehiculo.findByPk(id_placa);
   if(vehiculo){ res.json({
        Vehiculo
    });
}else{
    res.status(404).json({
        msg:"No existe este vehiculo"
    });
}
}

const putVehiculo  = async(req = request, res = response)=>{
    const {id_placa}= req.params;
    const {body} = req;
    try{
        const vehiculo = await Vehiculo.findByPk(id_placa);
        if(!vehiculo){
            return res.status(404).json({
                msg:"No existe el vehiculo"
            });
        }
        await vehiculo.update(body);

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"Hable con el administrador "
        });
    }
}

module.exports = {
    getVehiculo,
    getVehiculos,
    postVehiculo,
    putVehiculo
}