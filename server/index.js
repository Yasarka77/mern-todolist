const express = require('express')
const RunServer = require('./database/connection')
const todoRoute = require('./routes/route')
const cors = require ('cors')
const morgan = require('morgan')
const app = express()




app.use(cors()) //backend port = 3000 front is 5173
app.use(express.json())

app.use(morgan('dev'))
app.use('/todolist',todoRoute)

//http:/locathost:3000/todo
RunServer()
app.listen(3000,() => {
  console.log('server is upl')
})