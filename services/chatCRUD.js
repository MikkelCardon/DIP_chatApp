import Chat from '../models/chat.js'
import { loadChats, loadMessages } from './fileReaders.js'


export async function removeChat (chatId) {
    const chats = await loadChats()

    const chat = chats.find(currentChat => currentChat.id === chatId)
    const index = chats.indexOf(chat)

    chats.splice(index, 1)
    
    return chats
}

export async function addMessageToChat (chatId, message) {
    const chats = await loadChats()

    const chat = chats.find(currentChat => currentChat.id === chatId)
    chat.messages.push(message)
    
    return chats
}

export async function removeMessageFromChat (chatId, messageId) {
    const chats = await loadChats()

    const chat = chats.find(currentChat => currentChat.id === chatId)
    const message = chat.messages.find(currentMessage => currentMessage.id === messageId)
    
    const index = chat.messages.indexOf(message)
    chat.messages.splice(index, 1)
    
    return chats
}

