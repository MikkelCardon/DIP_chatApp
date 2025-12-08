import { deleteMessage } from "../api/messageRequest.js"

const chatId = document.getElementById('chatId')

document.querySelectorAll(".deleteMessage").forEach(button => {

    button.addEventListener("click", async () => {
        const postedToChat = chatId.getAttribute('data-chatId')
        const messageId = button.getAttribute('data-messageId')

        const response = await deleteMessage(postedToChat, messageId)

        if(response.ok){
            window.location.href = `/chats/${postedToChat}`
        } else {
            alert("Couldnt delete message")
        }
    })
})