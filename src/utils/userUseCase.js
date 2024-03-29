const fs = require('fs')
const path ='./src/db/users.json'

async function readFile(path){
    return await new Promise ((resolve, reject)=>
        {fs.readFile(path, 'utf-8', (error, data) =>{
        if (error) reject (error)
        else resolve((data))
    })
})
}

async function writeFile (data){
    return await new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data, null, 4), (error) =>{
            if (error) reject (error)
            else resolve (data) 
        })
    })
}

async function createUser(user){
    try{
        let users = await readFile()
        users.push(user)
        return await writeFile(users)
    }catch(error){
        return null
    }
}

async function getUsers(){
    try{
        return await readFile(path)
    }   
    catch (error){
        return null
    }
}

async function updateUser(id, user){
    try{
        let users = await readFile()
        
        const newUsers = users.map ((u)=>{
            if (u.id ==id){
                return user
                }
                return u
            })
            let created = await writeFile(newUsers)
            if (created){
                return user
            }else{
                return null
            }
        }
    catch(error){
        return null
    }
}

async function deleteUser(id){
    try{
        const users = await readFile()
        const newUsers = users.map ((u)=>{
            if (u.id ==id){
                return {}
                }
                return u
            })
            return await writeFile(users)
        }
    catch(error){
        return null
    }
}

module.exports={
    createUser,
    getUsers,
    updateUser,
    deleteUser
}