async function validUserId (req, res, next){
    const {userid} = req.headers
    const {id} = req.params

    if(userid != id){
        res.status(401).send({message:'User not authorised'})
    } else {
        next()
    }
}

//en body preguntar el id de la segunda persona con quien se tuvo el chat

async function chatUsers(req,res,next){
    const{userb} = req.body
    const{usera} = req.params
    if (usera && userb){
        next()
    } else {
        res.status(401).send({message:'User not authorised'})
    }
}

module.exports = {
    validUserId,
    chatUsers
}