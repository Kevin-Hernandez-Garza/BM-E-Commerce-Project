const express = require('express');
const userRoutes = require('./user-routes');
const female = require('./female');
const male = require('./male');
const review = require('./review-routes');

const router = express.Router();

//Routes
router.use('/users', userRoutes);
router.use('/female', female);
router.use('/male', male);
router.use('/reviews', review)


module.exports = router;
