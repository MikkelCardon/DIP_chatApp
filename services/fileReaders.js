import fs from 'fs/promises'

import Chat from '../models/chat.js'
import Message from '../models/message.js'
import User from '../models/user.js'


//USERS
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

export async function getUser (userId) {
    const users = await loadUsers()
    const user = users.find(currentUser => currentUser.id === userId)
    return user
}

//CHATS
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

export async function getChat (chatId) {
    const chats = await loadChats()
    const chat = chats.find(currentChat => currentChat.id === chatId)
    return chat
}

// MESSAGES
export async function loadMessages(chats) {
    const messages = []    

    chats.forEach(chat => {
        chat.messages.forEach(message =>{
            messages.push(message)
        })
    });

    return messages
}