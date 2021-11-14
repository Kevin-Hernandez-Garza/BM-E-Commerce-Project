const User = require('./User');
const Female = require('./Female');
const Male = require('./Male');
const Review = require('./Review');


/*////////////////////////////////////////////
                Associations
///////////////////////////////////////////*/

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = {User, Female, Male, Review};