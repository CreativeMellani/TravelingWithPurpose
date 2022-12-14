// require express.router
const router = require('express').Router();
// import userRoutes
const userroutes = require('./userroutes');
// import travelsRoutes
const searchedRoutes = require('./searchedRoutes');

// use middleware to direct to homeRoutes
router.use('/users', userroutes);
// use middleware to direct to searchedRoute
router.use('/searches', searchedRoutes);

// export module as router
module.exports = router;