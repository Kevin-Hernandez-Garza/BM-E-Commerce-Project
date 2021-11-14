const { User } = require('../models');

const userData = [
    {
        username: 'test',
        email: 'test@gmail.com',
        password: 'test1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;