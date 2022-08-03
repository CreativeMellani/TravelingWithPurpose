// require express.router
const router = require('express').Router();
// import userRoutes
const userRoutes = require('./userRoutes');
// import travelsRoutes
const travelRoutes = require('./travelRoutes');

// use middleware to direct to homeRoutes
router.use('/users', userRoutes);
// use middleware to direct to travelRoute
router.use('/travels', travelRoutes);

// export module as router
module.exports = router;