
export async function createMessage (createdByUser, postedToChat, text) {
    const response = await fetch(`/chats/${postedToChat}`, {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                { 
                    createdByUser: createdByUser, 
                    postedToChat: postedToChat,
                    text: text 
                }
            )
        }
    )
    return response
}

export async function deleteMessage (postedToChat, messageId) {
    const response = await fetch(`/chats/${postedToChat}/${messageId}`, {
            method: 'DELETE',
            credentials: "include"
        }
    )
    return response
}
