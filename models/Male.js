// importing "Model" and "DataTypes" objects from Sequelize
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// creating Female products model
class Male extends Model{}


// table column 
Male.init (
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
            type: DataTypes.INTEGER(10,2),
            allowNull: false,
            validate: {
                isDecimal:true
            }
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
        sequelize,
        timestamps: false,
        freezeTableName: true, 
        underscored: true, 
        modelName: 'male'
    }
);

module.exports = Male;