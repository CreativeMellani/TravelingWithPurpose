const userAuth = (req, res, next) => {
    // redirect request to login route, if user is not logged in
    if (!req.session.logged_in) {
        res.redirect('/login');
    }   else {
        next();
    }
};
// export module as userAuth
module.exports = userAuth;