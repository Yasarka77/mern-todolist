const todo = require("../model/todo")

    const getAllTodo = async(req,res) => {
    try {
        const AllTodo = await todo.find({})
        res.status(200).json({success : true, data : AllTodo})
    } catch (error) {
        console.log(error.message)
    }

}
 
    const createTodo = async (req,res) => {
        console.log(req.body)
    try {
        const anything = await todo.create({message:req.body.message })
        res.status(201).json({success : true,data :anything})
    } catch (error) {
        console.log(error.message)
    }
}

const DeleteTodo = async (req,res) => {
    try {
        const nothing = await todo.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({success:true})
    } catch (error) {
        console.log(error.message)
    }

}

const UpdateTodo = async (req,res) => {
    try {
        const update = await todo.updateOne({message:req.body.message})
        res.status(200).json({success:true,data:update})
    } catch (error) {
        console.log(error.message)
    }

}

module.exports = {
    getAllTodo,
    createTodo,
    DeleteTodo,
    UpdateTodo
}