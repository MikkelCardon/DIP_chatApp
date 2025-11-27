

export async function updateChat(newName, chatid) {
    const status = await put(chatId, updatedChatName) 
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