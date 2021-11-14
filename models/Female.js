// importing "Model" and "DataTypes" objects from Sequelize
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// creating Female products model
class Female extends Model{}


// table column 
///////////// be able to add an image as a column ///////////
Female.init (
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        // validate: {
        //     isDecimal:true
        // }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
  },
    {
        // pass in our sequelize connection to our db
        sequelize, 
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false, 
        // don't pluralize name of database table
        freezeTableName: true, 
        // use underscored instead of camelCase
        underscored: true, 
        // make our model stay lowercase in the db 
        modelName: 'female'
    }
);

module.exports = Female;