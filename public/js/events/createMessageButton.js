import { createMessage } from '../api/messageRequests.js'

const sendButton = document.getElementById("sendButton")

if(sendButton){
    sendButton.addEventListener("click", async () => {
        const messageInputElement = document.getElementById('msg')
        const text = messageInputElement.value

        const createdByUser = sendButton.getAttribute('data-userId')
        const postedToChat = chatId.getAttribute('data-chatId')
        
        if (text.length <= 0) {
            alert("Message can't be empty")
            return
        } 

        const reponse = await createMessage(createdByUser, postedToChat, text)

        if(reponse.ok){
            window.location.href = `/chats/${postedToChat}`
        }else {
            //Error
        }
    })
}