// importing sequelize 
const Sequelize = require('sequelize');

// importing environment variables
require('dotenv').config();

// WHEN DEPLOYING TO HEROKU, AND ADDING JAWSDB FOR REMOTE SQL DB 
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;