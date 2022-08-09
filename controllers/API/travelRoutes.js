// require express.Router;
const router = require('express').Router();
// import Searched model 
const { Searched } = require('../../models');
// import helper function for user authentication
const userAuth = require('../../utils/user_auth');

// POST route for new Searched user session
router.post('/', userAuth, async (req, res) => {
    try {
    const newSearch = await Searched.create ({
        ...req.body,
        user_id: req.session.user_id,
    });
// return res status 200 into json as newSearched
    res.status(200).json(newSearched);
    }   catch (err) {
        res.status(400).json(err);
    }
});

// DELETE route for saved Searched data with id
router.delete('/:id', userAuth, async (req, res) => {
    try {
        const SearchData = await Searched.destroy({
            // destroy saved session per params id and user_id session
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        // catch error return status 404 if Project data not found, status 200 if data found and deleted
        if (!SearchData) {
            res.status(404).json({ message: 'Error: No data found with this ID'});
            return;
        }
        res.status(200).json(SearchData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// export module as router
module.exports = router;