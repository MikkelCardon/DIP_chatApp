import { createMessage } from "../api/messageRequest.js"

const sendButton = document.getElementById("sendButton")
const inputElement = document.querySelector(".input-section")

if(sendButton){
    sendButton.addEventListener("click", async () => {
        sendMessageFunction()
    })
}

async function sendMessageFunction(){
    const messageInputElement = document.getElementById('msg')
    const text = messageInputElement.value

    if (text.length <= 0) {
        alert("Message cannot be empty")
        return
    }

    const createdByUser = sendButton.getAttribute('data-userId')
    const postedToChat = chatId.getAttribute('data-chatId')
    
    const reponse = await createMessage(createdByUser, postedToChat, text)

    if(reponse.ok){
        window.location.href = `/chats/${postedToChat}`
    }else {
        //Error
    }
}

inputElement.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        sendMessageFunction()
    }
});

