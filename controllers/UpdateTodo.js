
const Todo = require('../models/Todo')
exports.UpdateTodo = async (req, res) => {
    try {

        // fetch id 
         const ID=req.params.id;
        const { title, description } = req.body;
        const UpdateTodo = await Todo.findByIdAndUpdate({ _id: ID },
            { title, description, updatedAt: Date.now() });

        res.status(200).json({
            success: true,
            data: UpdateTodo,
            message: `Data is updated successfull.. on this ${ID}`
        })
    } catch (e) {
        console.error(e);
        res.status(404).json({
            success: false,
            error: e.message,
            message: "data not found"
        })
    }
}