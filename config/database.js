

const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => { console.log('Datbase Connection is successfull....') })
        .catch((error) => {
            console.log("Database Connection is failed");
            console.error(error.message);
            process.exit(1);
        })
}

module.exports = dbconnect;