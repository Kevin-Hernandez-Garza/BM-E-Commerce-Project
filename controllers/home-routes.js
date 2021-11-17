const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Female, Male, Review} = require('../models');

router.get('/', (req, res) => {

    Female.findAll({
        attributes: [
            'id',
            'product_name',
            'price',
            'stock',
            'photo',
            'description'
        ]
    })
        .then(dbFemaleData => {
            const products = dbFemaleData.map(data => data.get({ plain: true }));
            res.render('homepage', { products });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router; 