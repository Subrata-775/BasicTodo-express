

const express = require('express');
const Router = express.Router();
// import Controller
const { createTodo } = require('../controllers/createTodo');
const { getTodo } = require('../controllers/getTodo');
// define API
// create Route so use post req 
// build mapping  between route and controllers


// Get request
Router.get('/getTodo', getTodo);
// post request
Router.post('/createTodoList', createTodo);



module.exports = Router;

