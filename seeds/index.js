const seedFemaleProducts = require('./female-seeds');
const seedMaleProducts = require('./male-seeds');
const seedReviews = require('./review-seeds');
const seedUsers = require('./users-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('\n ----- db synced \n');

    await seedFemaleProducts();
    console.log('\n ----- female products synced \n');

    await seedMaleProducts();
    console.log('\n ----- male products synced \n');

    await seedUsers();
    console.log('\n ----- users synced  \n' ); 

    await seedReviews();
    console.log('\n ----- reviews synced \n');

    process.exit(0);
};

seedAll();