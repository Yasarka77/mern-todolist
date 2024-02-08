const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

    message:{
        type:String,
        required:'true',
        min:4,
        max:30
    },

})

const todo=mongoose.model('Todo', todoSchema)

module.exports = todo
