

const mongoose = require('mongoose');
//  you must load  environment variable (.env) using dotenv
require('dotenv').config;

const dbconnect = () => {

    // read database connection  string  from a environment variable
    mongoose.connect(process.env.DATABASE_URL) 
        .then(() => { console.log('Datbase Connection is successfull....') })
        .catch((error) => {
            console.log("Database Connection is failed");
            console.error(error.message);
            process.exit(1);
        })
}

module.exports = dbconnect;