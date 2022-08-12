// require express.Router
const router = require('express').Router();
// import USER models
const { User } = require('../../models');

// new user signup route and save session
router.post('/api/users', async (req, res) => {
    try {
        const userData = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.passwrord
        });
        req.session.save(() => {
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

// save session using user_id and log into session
router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);
        // save session
        req.session.save(()=> {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            // return res 200 network status
            res.status(200).json(userData);
        });
    // else catch error and return res 400 network status
    } catch (err) {
        res.status(400).json(err);
    }
});

// login route save session after validation check email and password of userData
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email }});
        // return if user input email cannot be found in userData
        if (!userData) {
            res.status(400).json({ message: 'Email entered cannot be found!'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        // return if user input password is not matched to data in userData
        if (!validPassword) {
            res.status(400).json({ message: 'Password entered does not match!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'User' + userData.id +'has successfully logged in!'});
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