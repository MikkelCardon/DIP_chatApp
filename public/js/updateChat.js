

export async function updateChat(newName, chatId) {
    const status = await put(chatId, newName) 
    return status
}

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