const { Female } = require('../models');

const femaleData = [
    {
        product_name: 'Perfume1',
        price: 89.99,
        stock: 32,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637032789/1MILLIONPRIVE_mpg929.jpg"
    },
    {
        product_name: 'Perfume2',
        price: 45.99,
        stock: 43,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637032789/1MILLIONPRIVE_mpg929.jpg"
    },
    {
        product_name: 'Perfume3',
        price: 69.99,
        stock: 25,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637032789/1MILLIONPRIVE_mpg929.jpg"
    },
    {
        product_name: 'Perfume4',
        price: 24.99,
        stock: 30,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637032789/1MILLIONPRIVE_mpg929.jpg"
    },
    {
        product_name: 'Perfume5',
        price: 32.99,
        stock: 45,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637032789/1MILLIONPRIVE_mpg929.jpg"
    },
    {
        product_name: 'Perfume6',
        price: 125.99,
        stock: 50,
        description:"kasdlfkja;slkdjf;laskjdf;lkasjd",
        photo: "https://res.cloudinary.com/dasr4nopa/image/upload/v1637032789/1MILLIONPRIVE_mpg929.jpg"
    },
]



const seedFemaleProducts = () => Female.bulkCreate(femaleData);

module.exports = seedFemaleProducts;