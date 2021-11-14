const { Male } = require('../models');


const maleData = [
    {
        product_name: 'Cologne1',
        price: 79.99,
        stock: 38,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Cologne2',
        price: 25.99,
        stock: 23,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Cologne3',
        price: 89.99,
        stock: 55,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Cologne4',
        price: 74.99,
        stock: 40,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Cologne5',
        price: 52.99,
        stock: 25,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
    {
        product_name: 'Cologne6',
        price: 35.99,
        stock: 30,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd"
    },
]



const seedMaleProducts = () => Male.bulkCreate(maleData);

module.exports = seedMaleProducts;