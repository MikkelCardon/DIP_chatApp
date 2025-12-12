import { createChat } from '../api/chatRequest.js'

const createChatButton = document.getElementById('createChatButton')

createChatButton.addEventListener('click', async () => {
    const chatNameInput = document.getElementById('chatNameInput')

    const chatName = chatNameInput.value
    
    const response = await createChat(chatName)
    const data = await response.json()
    const chatId = parseInt(data.chatId)

    window.location.href = `/chats/${chatId}`
})

