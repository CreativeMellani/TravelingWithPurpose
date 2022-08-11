// require express.router
const router = require('express').Router();
// import userRoutes
const userRoutes = require('./userRoutes');
// import travelsRoutes
const searchedRoutes = require('./searchedRoutes');

// use middleware to direct to homeRoutes
router.use('/user', userRoutes);
// use middleware to direct to searchedRoute
router.use('/search', searchedRoutes);

// export module as router
module.exports = router;