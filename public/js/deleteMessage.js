
export async function deleteMessage(postedToChat, messageId){
    // initial idea of checking rather the user is at correct level - this is also done in the pug if statements
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
