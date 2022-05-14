const express = require('express');

class Server
{

    constructor()
    {
        this.app = express();
        this.port = 5000;
        this.paths = {
            nacionalidad: '/api/nacionalidad'
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
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.nacionalidad, require('../routes/nacionalidad.routes'));
    }

}

module.exports = Server