const sendMessageButton = document.getElementById('sendMessageButton')

sendMessageButton.addEventListener('click', async () => {
    const messageInputElement = document.getElementById('messageInputElement')
    const createdByUser = messageInputElement.getAttribute('data-userId')
    const postedToChat = messageInputElement.getAttribute('data-chatId')
    const text = messageInputElement.value

    const status = await post(createdByUser, postedToChat, text)

    window.location.href = `/chats/${postedToChat}`
})

async function post (createdByUser, postedToChat, text) {
    const response = await fetch(`/chats/${postedToChat}`, {
            method: 'POST',
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