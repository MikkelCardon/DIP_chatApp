
export async function deleteMessage(postedToChat, messageId){
    const response = await messageToDelete(postedToChat, messageId)
    return response
}


async function messageToDelete (postedToChat, messageId) {
    const response = await fetch(`/chats/${postedToChat}/${messageId}`, {
            method: 'DELETE',
            credentials: "include"
        }
    )
    return response
}
