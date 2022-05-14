const express = require('express');
const sequelize = require('../database/connection');
const cors = require('cors');

class Server
{

    constructor()
    {
        this.app = express();
        this.dbConnection();
        this.port = 5000;
        this.paths = {
            nacionalidad: '/api/nacionalidad',
            vehiculo: '/api/vehiculo'
        }
        this.middlewares();
        this.routes();

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server ready in port ${this.port}`);
        });
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    async dbConnection(){
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    routes(){
        this.app.use(this.paths.nacionalidad, require('../routes/nacionalidad.routes'));
        this.app.use(this.paths.vehiculo, require('../routes/vehiculo.routes'));
    }

}

module.exports = Server