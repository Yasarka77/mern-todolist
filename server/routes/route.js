const express = require('express')
const { getAllTodo, createTodo, UpdateTodo, DeleteTodo } = require('../controller/todoctrl')

const router = express.Router()

//CRUD
//create - POST
//read  -  GET
//Update - PUT
//Delete - Delete

router.get('/getallTodo',getAllTodo)
router.post('/',createTodo)
router.put('/todoupdate',UpdateTodo)
router.delete('/tododelete/:id',DeleteTodo)

//http://locatlost:3000/getallTodo

module.exports = router
