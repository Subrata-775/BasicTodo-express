
const Todo = require('../models/Todo');

exports.getTodoById = async (req, res) => {
    try {

        // first  fetch Id then Data  by Id
        const ID = req.params.id;
        const OneTodo = await Todo.findById(ID);

        // yes
        if (!OneTodo) {
            return res.status(404).json({
                success: false,
                message: "No data Fetch By Id"
            })
        } res.status(200).json({
            success: true,
            data: OneTodo,
            message: `Data Fetch By ${ID}`
        })

    } catch (e) {
        console.error(e);
        res.status(500).json({

            success: false,
            error: e.message,
            message: "Server Error"


        })
    }
}