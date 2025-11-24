const updateChatButton = document.getElementById("updateChatButton")

updateChatButton.addEventListener('click', async () => {
    const chatNameLabel = document.getElementById('chatNameLabel')
    const updatedChatName = chatNameLabel.value    

    const chatId = updateChatButton.getAttribute('data-chatId')

    const status = await put(chatId, updatedChatName) 

    window.location.href = `/chats/${chatId}`
})

async function put (chatId, updatedChatName) {
    const response = await fetch(`/chats/${chatId}`, 
        {
            method: 'PUT', 
            credentials: "include",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({updatedChatName: updatedChatName})
        }
    )
    return response
}