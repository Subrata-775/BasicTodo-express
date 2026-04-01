

const express = require('express');
const Router = express.Router();
// import Controller
const { createTodo } = require('../controllers/createTodo');
const { getTodo } = require('../controllers/getTodo');
const { getTodoById } = require('../controllers/getoneTodo');
const { UpdateTodo } = require('../controllers/UpdateTodo')
// define API
// create Route so use post req 
// build mapping  between route and controllers


// Get request
Router.get('/getTodo', getTodo);
Router.get('/getTodo/:id', getTodoById);
// post request
Router.post('/createTodo', createTodo);
// put --update
Router.put('/updateTodo/:id', UpdateTodo)



module.exports = Router;

