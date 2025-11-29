import { createChat } from "../api/chatRequests.js"

const createChatButton = document.getElementById('createChatButton')

createChatButton.addEventListener('click', async () => {
    const chatNameInput = document.getElementById('chatNameInput')

    const chatName = chatNameInput.value
    
    const response = await createChat(chatName)
    const data = await response.json()
    const chatId = parseInt(data.chatId)
    console.log(`chatId: ${chatId}`)

    window.location.href = `/chats/${chatId}`
})