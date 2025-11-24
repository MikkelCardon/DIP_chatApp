const deleteChatButton = document.getElementById("deleteChatButton")

deleteChatButton.addEventListener('click', async () => {
    const invokedByUser = deleteChatButton.getAttribute('data-userId')
    const chatId = deleteChatButton.getAttribute('data-chatId')

    const status = await chatToDelete(chatId)

    window.location.href = `/chats`
})

async function chatToDelete (chatId) {
    const response = await fetch(`/chats/${chatId}`, {
            method: 'DELETE',
            credentials: "include"
        }
    )
    return response
}