// require sequelize
const Sequelize = require('sequelize');

// require dotenv module
require('dotenv').config();

// declare sequelize as a variable
let sequelize; 

// create new instance of Sequelize using dotenv profile
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize (process.env.JAWSDB_URL);   
}   else {
    sequelize = new Sequelize (
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

// export module as sequelize
module.exports = sequelize;