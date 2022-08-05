// require express.Router
const router = require('express').Router();
// import USER models
const { User } = require('../../models');

// save session using user_id and log into session
router.post('/', async (req, res) => {
    try{
        const userProfile = await User.create(req.body);
        // save session
        req.session.save(()=> {
            req.session.user_id = userProfile.id;
            req.session.logged_in = true;
            // return res 200 network status
            res.status(200).json(userProfile);
        });
    // else catch error and return res 400 network status
    } catch (err) {
        res.status(400).json(err);
    }
});

// login route save session after validation check email and password of userProfile
router.post('/login', async (req, res) => {
    try {
        const userProfile = await User.findOne({ where: { email: req.body.email }});
        // return if user input email cannot be found in userProfile
        if (!userProfile) {
            res.status(400).json({ message: 'Email entered cannot be found!'});
            return;
        }

        const validPassword = await userProfile.checkPassword(req.body.password);
        // return if user input password is not matched to data in userProfile
        if (!validPassword) {
            res.status(400).json({ message: 'Password entered does not match!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userProfile.id;
            req.session.logged_in = true;

            res.json({ user: userProfile, message: 'User' + userProfile.id +'has successfully logged in!'});
        });
    // else catch error res 400 status
    } catch (err) {
        res.status(400).json(err);
    }
});

// logout route destroy session and end session
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
        // else error 404
    } else {
        res.status(404).end();
    }
});

// export module as router
module.exports = router;