// require express.Router
const router = require('express').Router();
// import Travels, User models
const { Travels, User} = require('../models');
// import Auth helper function from utils
const userAuth = require('../utils/user_auth');

// utilize Auth helper function to redirect to login route
router.get('/profile', userAuth, async (req, res) => {
    try {
        // findByPk using session ID
        const userProfile = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{model: Travels}],
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