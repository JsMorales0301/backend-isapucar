const { Sequelize } = require('sequelize')

const nameDatabase = 'sapucar';
const userDatabase = 'root';
const passwordDatabase = '1234';
const host = 'localhost';
const dialect = 'mysql';


const sequelize = new Sequelize(nameDatabase, userDatabase, passwordDatabase, {
    host: host,
    dialect: dialect
});

module.exports = sequelize;