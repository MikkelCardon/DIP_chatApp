import express from "express"
import fs from 'fs/promises'
import User from '../models/user.js'

const loginRouter = express.Router()

loginRouter.get("/", (request, response) => {
    response.render('frontpage', {title: 'Frontpage'})
})

loginRouter.post("/", async (request, response) => {
    let {username, password} = request.body

    const users = await loadUsers()

    const user = users.filter(user => user.username === username && user.password === password)

    if(user){
        request.session.username = username
        response.redirect("/")
    } else{
        response.status(401).send("Username or password is incorrect!")
    }
})

async function loadUsers(){
    const data = await fs.readFile("./users.json", 'utf-8')
    const usersJson = JSON.parse(data)
    const usersArray = usersJson.users

    const users = usersArray.map(user => 
        new User(
            user.id,
            user.username,
            user.password,
            user.dateOfCreation,
            user.userLevel
        )
    );
    console.log(users);
    return users
}

export default loginRouter