const sequilize = require ('../config/connections');
const {User , Searched} = require ('../models');
const userProfile = require ('../seeds/userData.json');
const userSearch = require ('../seeds/searchData.json');

const userDatabase = async () =>{
    await sequilize.sync({force: true });

//  const 


}

    await Searched.bulkCreate(userSearch,{
        returning:true,
    });

    process.exit(0);

};

userDatabase();


 

