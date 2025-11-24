const createChatButton = document.getElementById('createChatButton')

createChatButton.addEventListener('click', async () => {
    const chatNameInput = document.getElementById('chatNameInput')

    const chatName = chatNameInput.value
    
    const response = await post(chatName)
    const data = await response.json()
    const chatId = parseInt(data.chatId)
    console.log(`chatId: ${chatId}`)

    window.location.href = `/chats/${chatId}`
})

async function post (name) {
    const response = await fetch(`/createchat`, {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { 
                    name: name,
                }
            )
        }
    )
    return response
}