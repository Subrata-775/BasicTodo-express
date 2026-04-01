
// server initiate
const express = require('express');
const app = express();

// load config  from env file 
// means  all the data  which  is  presnt in ENV file .. is loaded in process object  
require('dotenv').config();
const PORT = process.env.PORT || 3000;


// middleware is used to parse json data to the req.body
//  Specifically parse JSON data  and add it  to the request.body  object.
app.use(express.json());


//Import route for TODO API routes

// These lines are used to connect your routes file 
// with the main Express application.
const todoRoutes = require('./routes/Todos')
// mound or append  the todo api routes
app.use("/api/v1", todoRoutes);



// create a Default Route

app.get('/', (req, res) => {
    res.send(`<h1>This is Home Page </h1>`)
})

//DB connection 
const dbConnect = require('./config/database');
dbConnect();


app.listen(PORT, () => {
    console.log(`App is successfully running on Port no ${PORT}`);
});