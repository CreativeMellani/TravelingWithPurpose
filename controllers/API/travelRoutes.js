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
router.delete('/:id', userAuth, async (req, res) => {
    try {
        const travelData = await Travel.destroy({
            // destroy saved session per params id and user_id session
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        // catch error return status 404 if Project data not found, status 200 if data found and deleted
        if (!travelData) {
            res.status(404).json({ message: 'Error: No data found with this ID'});
            return;
        }
        res.status(200).json(travelData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// export module as router
module.exports = router;