const sequilize = require ('../config/connections');
const {User , Searched} = require ('../models');
const userProfile = require ('../seeds/userData.json');
const userSearch = require ('../seeds/searchData.json');

const userDatabase = async () =>{
    await sequilize.sync({force: true });

    await userProfile();

    await userSearch();

// 





    process.exit(0);

};

userDatabase();


 

