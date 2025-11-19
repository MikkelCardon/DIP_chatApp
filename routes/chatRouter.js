import express from "express"

import {loadUsers, loadChats, loadMessages} from '../services/fileReaders.js'

const chatRouter = express.Router()

chatRouter.get("/", async (request, response) => {
    const chats = await loadChats()
    response.json(chats)
})

chatRouter.get("/:id", async (request, response) => {
    const chatId = parseInt(request.params.id)
    const chats = await loadChats()

    const filteredChat = chats.find(chat => chat.id === chatId)

    response.json(filteredChat)
})

chatRouter.get("/:id/messages", async (request, response) => {
    const chatId = parseInt(request.params.id)

    const chats = await loadChats()

    const filteredChat = chats.filter(chat => chat.id === chatId)

    const messages = await loadMessages(filteredChat)    

    response.json(messages)
})

chatRouter.get("/messages/:id", async (request, response) => {
    const messageId = parseInt(request.params.id)

    const chats = await loadChats()
    const messages = await loadMessages(chats)    

    const filteredMessages = messages.find(message => message.id === messageId)

    response.json(filteredMessages)
})

export default chatRouter