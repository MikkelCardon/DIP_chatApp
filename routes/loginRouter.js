import express from "express"
import fs from 'fs/promises'
import User from '../models/user.js'

const loginRouter = express.Router()

loginRouter.get("/", (request, response) => {
    response.render('loginpage', { title: 'Login' })
})

loginRouter.post("/", async (request, response) => {
    let { username, password } = request.body

    const users = await loadUsers()

    const user = users.filter(user => user.username === username && user.password === password)[0]

    console.log(user);
    

    if (user) {
        request.session.username = user.username
        request.session.userLevel = user.userLevel 
        request.session.userId = user.id

        console.log(request.session);
        
        response.sendStatus(200)
    } else {
        response.sendStatus(404)
    }
})

export async function loadUsers() {
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
    return users
}

export default loginRouter