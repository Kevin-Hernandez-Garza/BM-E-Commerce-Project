const { Female } = require('../models');

const femaleData = [
    {
        product_name: 'Perfume1',
        price: 89.99,
        stock: 32,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Perfume2',
        price: 45.99,
        stock: 43,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Perfume3',
        price: 69.99,
        stock: 25,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Perfume4',
        price: 24.99,
        stock: 30,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Perfume5',
        price: 32.99,
        stock: 45,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Perfume6',
        price: 125.99,
        stock: 50,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
]



const seedFemaleProducts = () => Female.bulkCreate(femaleData);

module.exports = seedFemaleProducts;