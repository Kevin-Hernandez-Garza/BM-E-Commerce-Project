const express = require('express');
const apiRoutes = require('./api');

const router = express.Router();

// added home-routes file 
const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);
// added

router.use('/api', apiRoutes);

module.exports = router;