
const deleteMessageButtons = document.querySelectorAll(".deleteMessageButton")

deleteMessageButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', async () => {
        
        // initial idea of checking rather the user is at correct level - this is also done in the pug if statements
        const invokedByUser = deleteButton.getAttribute('data-userId')
        const postedToChat = deleteButton.getAttribute('data-chatId')
        const messageId = deleteButton.getAttribute('data-messageId')

        const status = await messageToDelete(postedToChat, messageId)

        window.location.href = `/chats/${postedToChat}`
    })
})

async function messageToDelete (postedToChat, messageId) {
    const response = await fetch(`/chats/${postedToChat}/${messageId}`, {
            method: 'DELETE'
        }
    )
    return response
}
