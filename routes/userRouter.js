import express from "express"

import {loadUsers, loadChats, loadMessages} from '../services/fileReaders.js'



const userRouter = express.Router()

//Returns a list of Users
userRouter.get("/", async (request, response) => {
    const users = await loadUsers() 
    response.json(users)
})

userRouter.get("/:id", async (request, response) => {
    const id = parseInt(request.params.id)
    const users = await loadUsers()

    const filteredUser = users.find(user => user.id === id)
    response.json(filteredUser)
})

userRouter.get("/:id/messages", async (request, response) => {
    const userId = parseInt(request.params.id)

    const chats = await loadChats()
    const messages = await loadMessages(chats)    

    //Uses filter because we want to find all messages by a user
    const filteredMessages = messages.filter(message => message.createdByUser === userId) 

    response.json(filteredMessages)
})

export default userRouter