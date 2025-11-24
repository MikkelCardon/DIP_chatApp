import Chat from '../models/chat.js'
import Message from '../models/message.js'
import { loadChats } from './fileReaders.js'

export function createChat (name, createdByUser) {
    console.log(name, createdByUser);
    const chat = new Chat(null, name, new Date().toLocaleDateString('en-GB'), createdByUser, [])
    return chat
}

export async function removeChat (chatId) {
    const chats = await loadChats()

    const chat = chats.find(currentChat => currentChat.id === chatId)
    const index = chats.indexOf(chat)

    chats.splice(index, 1)
    
    return chats
}

// MESSAGE CRUD
export function createMessage (id, createdByUser, dateOfCreation, postedToChat, text) {
    const user = new Message (id, createdByUser, dateOfCreation, postedToChat, text) 
    return user
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

export async function updateChatName (chatId, updatedChatName) {
    const chats = await loadChats()

    const chat = chats.find(currentChat => currentChat.id === chatId)
    chat.name = updatedChatName

    return chats
}