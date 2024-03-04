require ('dotenv').config( )
const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./src/routes/users')
const messageRoutes = require ('./src/routes/messages')
const mongoDB = require('./src/db/db')
const { mongo } = require('mongoose')



app.use(express.json())

app.get('/', (req, res)=>{
    res.send({message:'API Kodemia repaso'})
})

app.use('/users', userRoutes)

app.use('/chat', messageRoutes)


mongoDB.connect.then((message)=>{
    console.log(message)
    app.listen(port, ()=>{
        console.log(`Serving reading in port ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})