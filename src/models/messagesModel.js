const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    userA:{
        type: String,
        required: true,
    },
    userB:{
        type: String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},
{
    timestamps: true
})

const Message = mongoose.model('messages', messageSchema)

module.exports= Message