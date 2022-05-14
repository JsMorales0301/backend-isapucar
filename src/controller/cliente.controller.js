const { request, response } = require('express');
const Cliente = require('../models/cliente');

const postCliente = async(req = request, res = response) => {
    
    const { body } = req;

    const cliente = new Cliente(body);

    await cl.save();

    res.json({
        msg: '¡Usuario creado correctamente!'
    });
}

const getClientes =async(req = request, res = response )=>{
    const cliente = await Cliente.findAll();
    res.json({cliente});
}

 const getCliente  = async(req = request, res = response)=>{
    const { id_cliente } = req.params;
    const cliente = await Cliente.findByPk(id_cliente);
   if(cliente){ res.json({
        Cliente
    });
}   else{
        res.status(404).json({
            msg:"No existe este Cliente"
        });
}
}
const putCliente  = async(req = request, res = response)=>{
    const {id_cliente}= req.params;
    const {body} = req;
    try{
        const cliente = await Cliente.findByPk(id_cliente);
        if(!cliente){
            return res.status(404).json({
                msg:"No existe el cliente"
            });
        }
        await cliente.update(body);

    }catch(error){
        console.log(error);
        res.status(500).json({
            msg:"Hable con el administrador "
        });
    }
}
module.exports = {
    postCliente,
    getCliente,
    getClientes,
    putCliente
}
