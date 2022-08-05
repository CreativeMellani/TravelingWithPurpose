const User = require ('../models/user');
const Searched = require ('../models/searched');


User.hasMany(Searched, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'

});

module.exports= { User, Searched} ;



