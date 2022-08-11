// require express.Router
const router = require('express').Router();
// import Searched, User models
const { Searched, User} = require('../models');
// import Auth helper function from utils
const userAuth = require('../utils/user_auth');


// GET route to retrieve user_login.js

// use middleware to check for user name and email from userData data
router.get('/', userAuth, async (req, res) => {
    try {
        const userData = await User.findAll ({
            attributes: { exclude: ['password']},
            order: [['name', 'email']],
        });
        // create users by mapping through Searched data and use to render homepage handlebars
        const users = userData.map((User) => User.get({ plain: true}));
        res.render('homepage', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// utilize Auth helper function to redirect to login route
router.get('/search', userAuth, async (req, res) => {
    try {
        // findByPk using session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{model: User }],
        });
        const user = userData.get({ plain: true});
        res.render('search', {
            ...user,
            logged_in: true
        });
    // else catch error and return status 500 err
    } catch (err) {
        res.status(500).json(err);
    }
});

// redirect client request to user profile if logged in
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/homepage');
        return;
    }
    res.render('login');
});

// export module as router
module.exports = router;
