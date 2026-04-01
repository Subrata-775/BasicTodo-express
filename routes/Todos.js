

const express = require('express');
const Router = express.Router();
// import Controller
const { createTodo } = require('../controllers/createTodo');
// define API
// create Route so use post 
// build mapping  between route and controllers
Router.post('/createTodoList', createTodo);
module.exports = Router;

