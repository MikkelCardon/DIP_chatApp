
export async function deleteChat(chatId){
    const response = await chatToDelete(chatId)
    return response
}

async function chatToDelete (chatId) {
    const response = await fetch(`/chats/${chatId}`, {
            method: 'DELETE',
            credentials: "include"
        }
    )
    return response
}