// require express.router
const router = require('express').Router();
// connect user and home routes
// const apiRoutes = require('./api');
const homeRoutes=require('./homeRoutes')

// use middleware to direct to homeRoutes
router.use('/', homeRoutes);
// use middleware to direct to apiRoute
// router.use('/api', apiRoutes);

// export module as router
module.exports = router;
