const express = require('express')
const router = express.Router()
const userUseCases = require('../utils/userUseCase')
const authMiddlewares = require('../middlewares/auth')
const Message = require('../models/messagesModel')

router.get('/', async (req, res)=>{
    try{
        const messages = await Message.find()
        res.send({message: 'All users', data:messages})
    }
    catch (error){
            res.status(400).send({message:error})
    }
})

router.post('/', async (req, res)=>{ //authMiddlewares.chatUsers
    try{
        const message = req.body
        const newChat = await Message.create(message)
        newChat.save()
        res.status(201).send({message:newChat})
    }
    catch (error){
        res.status(200).send({message:'Login success', data:'token'})
    }
})

module.exports = router