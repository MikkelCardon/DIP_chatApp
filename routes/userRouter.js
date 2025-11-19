import express from "express"
import fs from 'fs/promises'

import {loadUsers} from './loginRouter.js'

import Chat from '../models/chat.js'
import Message from '../models/message.js'

const userRouter = express.Router()

//Returns a list of Users
userRouter.get("/", async (request, response) => {
    const users = await loadUsers() 
    response.json(users)
})

userRouter.get("/:id", async (request, response) => {
    const id = request.params.id
    const users = await loadUsers()

    const user = users.filter(user => user.id === id)
    response.send(user)
})

userRouter.get("/:id/messages", async (request, response) => {
    const userId = parseInt(request.params.id)

    const chats = await loadChats()
    const messages = await loadMessages(chats)    

    const filteredMessages = messages.filter(message => message.createdByUser === userId)

    response.send(filteredMessages)
})


export async function loadChats() {
    const data = await fs.readFile("./chats.json", 'utf-8')
    const chatJson = JSON.parse(data)
    const chatArray = chatJson.chats    

    const chats = chatArray.map(chat =>{
        const messages = []

        chat.messages.forEach(message => {
            messages.push(new Message(
                message.id,
                message.createdByUser,
                message.dateOfCreation,
                message.postedToChat,
                message.text
            ))
        })

        return new Chat(
            chat.id,
            chat.name,
            chat.dateOfCreation,
            chat.createdByUser,
            messages
        )
    }
    );
    return chats
}


export async function loadMessages(chats) {
    const messages = []    

    chats.forEach(chat => {
        chat.messages.forEach(message =>{
            messages.push(message)
        })
    });

    return messages
}




export default userRouter