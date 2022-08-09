const sequilize = require ('../config/connections');
const {User , Searched} = require ('../models');
const userProfile = require ('../seeds/userData.json');
const userSearch = require ('../seeds/searchData.json');

const userDatabase = async () =>{
    await sequilize.sync({force: true });

    await User.bulkCreate(userProfile, {
        individualHooks: true,
        returning:true,
    });


    await Searched.bulkCreate(userSearch,{
        returning:true,
    });

    process.exit(0);

};

userDatabase();


 

