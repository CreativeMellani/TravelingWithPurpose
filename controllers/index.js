// require express.router
const router = require('express').Router();
// connect user and home routes
const apiRoutes = require('./api');

// use middleware
router.use('/api', apiRoutes);

// export module as router
module.exports = router;
