// import path module
const path = require('path');
// import express module
const express = require('express');
// import express-session module
const session = require('express-session');
// import express-handlebars module
const expHbs = require('express-handlebars');
// use expHbs and helper function formatDate for handlebars engine 
const hbs = expHbs.create({});
// import API routes from controller folder
const routes = require('./controllers');

// import helper function from utils
const userAuth = require('./utils/user_auth');
// declare local/ PORT env
const PORT = process.env.PORT || 3002;
// use app for express()
const app = express();

// import sequelize module from config/connection
const sequelize = require('./config/connections');
// import connect-session-sequelize to create new sequelize instance
const sequelizeSession = require('connect-session-sequelize')(session.Store);

// use imported configurations from connections.js to update new Stored session
const newSession = {
    secret: 'Confidential secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeSession({
        db: sequelize
    })
};

// use middleware to save newSession
app.use(session(newSession));
// use express-handlebars with helper function for template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use express middleware to access json and public folder files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// use controller API routes 
app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('App is now listening at: '+`${PORT}` ));
});





