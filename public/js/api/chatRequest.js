export async function createChat (name) {
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

export async function deleteChat (chatId) {
    const response = await fetch(`/chats/${chatId}`, {
            method: 'DELETE',
            credentials: "include"
        }
    )
    return response
}

export async function updateChat (chatId, updatedChatName) {
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