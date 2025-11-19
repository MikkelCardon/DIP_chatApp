import express from "express"

import {loadUsers} from '../services/fileReaders.js'

const loginRouter = express.Router()

loginRouter.get("/", (request, response) => {
    response.render('logInUserPage', { title: 'Login' })
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

export default loginRouter