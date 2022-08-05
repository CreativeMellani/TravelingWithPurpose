// require express.Router
const router = require('express').Router();
// import Searched, User models
const { Searched, User} = require('../models');
// import Auth helper function from utils
const userAuth = require('../utils/user_auth');

// use middleware to check for user name and email from userProfile data
router.get('/', userAuth, async (req, res) => {
    try {
        const userProfile = await User.findAll ({
            attributes: { exclude: ['password']},
            order: [['name', 'email']],
        });
        // create users by mapping through Searched data and use to render homepage handlebars
        const users = userProfile.map((Searched) => Searched.get({ plain: true}));
        res.render('homepage', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// utilize Auth helper function to redirect to login route
router.get('/profile', userAuth, async (req, res) => {
    try {
        // findByPk using session ID
        const userProfile = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{model: Searched}],
        });
        const user = userProfile.get({ plain: true});
        res.render('profile', {
            ...user,
            logged_in: true
        });
    // else catch error and return status 500 err
    } catch (err) {
        res.status(500).json(err);
    }
});

// redirect client request to profile if logged in
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login')
});

// export module as router
module.exports = router;
