const { Review } = require('../models');

const reviewsData = [
    {
        comment_text: 'This website is amazing and their products are top notch!',
        user_id: 1
    },
    {
        comment_text: "Couldn't have asked for a better birthday present!",
        user_id: 1
    },
    {
        comment_text: 'The customer service/support at Byte-ME is the best service I have experienced EVER!!',
        user_id: 1
    },
];

const seedReviews = () => Review.bulkCreate(reviewsData);

module.exports = seedReviews;