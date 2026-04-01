

const Todo = require('../models/Todo');

// get all todo Data 

exports.getTodo = async (req, res) => {
    try {

        // fetch All data
        const AllTodos = await Todo.find({});
        // send response
        res.status(200).json({
            success: true,
            data: AllTodos,
            message: "Fetch Data successfull"
        })

    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            data: e,
            message: "Server Error"
        })

    }
};