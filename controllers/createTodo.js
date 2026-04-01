

// import Todo Schema
const Todo = require('../models/Todo');

// define a Route Handler
exports.createTodo = async (req, res) => {
    try {

        // extract or fetch   {title and description  data} from request.body
        const { title, description } = req.body;
        // create a new Todo Obj and insert in DB
        const response = await Todo.create({ title, description });
        // send a json response with successfull flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created Successfull"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: error,
            message: error.message
        })
    }
}