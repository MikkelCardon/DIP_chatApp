export async function sendMessage(createdByUser, postedToChat, text){
    if (text.length <= 0) {
        alert("Message can't be empty")
        return
    }
    const response = await post(createdByUser, postedToChat, text)
    return response
}

async function post (createdByUser, postedToChat, text) {
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