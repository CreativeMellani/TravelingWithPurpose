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