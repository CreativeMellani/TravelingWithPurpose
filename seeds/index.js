const sequilize = require ('../config/connections');
const {User , Searched} = require ('../models');
const userProfile = require ('../seeds/userData.json');
const Searched = require ('../seeds/searchData.json');

const userDatabase = async () =>{
    await sequilize.sync({force: true });

//  const 


}




userDatabase();


 

