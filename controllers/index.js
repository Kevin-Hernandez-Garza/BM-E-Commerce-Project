const express = require('express');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

const router = express.Router();

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;