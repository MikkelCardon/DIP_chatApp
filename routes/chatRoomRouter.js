import express from 'express'
import { getChat } from '../services/fileReaders.js'
import { createMessage } from '../services/messageCRUD.js'
import { updateChats } from '../services/fileWriters.js'
import { addMessageToChat, removeChat, removeMessageFromChat } from '../services/chatCRUD.js' 

const router = express.Router()

router.get('/:id', async (request, response) => {
    const chatId = parseInt(request.params.id)
    const chat = await getChat(chatId)
    
    if (!chat) {
        console.error(`ChatId ${chatId} doesn't exist`)
        response.sendStatus(401)
    }

    response.render('chatRoomPage', {
        title: `chats/${chat.name}`,
        chatName: chat.name,
        createdByUser: parseInt(chat.createdByUser),
        messages: chat.messages,
        userId: parseInt(request.session.userId),
        userLevel: parseInt(request.session.userLevel),
        chatId: parseInt(chat.id)
    })
})

router.post('/:id', async (request, response) => {
    const { createdByUser, postedToChat, text } = request.body
    const chatId = parseInt(request.params.id)

    const newMessage = createMessage(null, createdByUser, Date.now(), postedToChat, text)
    
    const chats = await addMessageToChat(chatId, newMessage)

    if (!chats) {
        console.error(`chatRoomRouter.post('/:id',...) -> chats are ${typeof(chats)}`)
        response.sendStatus(401)
    }

    await updateChats(chats)
    response.sendStatus(201)
})

router.delete('/:id', async (request, response) => {
    const chatId = parseInt(request.params.id)
    
    const chats = await removeChat(chatId)

    if (!chats) {
        console.error(`chatRoomRouter.delete('/:id',...) -> chats are ${typeof(chats)}`)
        response.sendStatus(401)
    }

    await updateChats(chats)
    response.sendStatus(201)
})

router.delete('/:id/:messageid', async (request, response) => {
    const postedToChat = parseInt(request.params.id)
    const messageId = parseInt(request.params.messageid)

    const chats = await removeMessageFromChat(postedToChat, messageId)

    if (!chats) {
        console.error(`chatRoomRouter.delete('/:id/:messageid',...) -> chats are ${typeof(chats)}`)
        response.sendStatus(401)
    }

    await updateChats(chats)
    response.sendStatus(201)
})

export default router