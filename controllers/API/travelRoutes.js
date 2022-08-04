// require express.Router;
const express = require('express').Router();
const router = require('.');
// import Travel model 
const { Travel } = require('../../models');
// import helper function for user authentication
const userAuth = require('../../utils/user_auth');

// POST route for new Travel user session
router.post('/', userAuth, async (req, res) => {
    try {
    const newTravel = await Travel.create ({
        ...req.body,
        user_id: req.session.user_id,
    });
// return res status 200 into json as newTravel
    res.status(200).json(newTravel);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// DELETE route for saved Travel data with id



// export module as router