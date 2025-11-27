/* IMPORT OF FUNCTIONS */
import { updateChat } from './updateChat.js'
import { deleteChat } from './deleteChat.js'
import { sendMessage } from './sendMessage.js'



const chatHeader = document.getElementById('chatHeader');
const chatTitle = document.getElementById('chatId');

const deleteButton = document.getElementById('deleteButton');

const sendButton = document.getElementById("sendButton")


chatHeader.addEventListener('click', async (e) => {
    if (e.target === deleteButton) return; 

    const newName = prompt("Enter new chat name:", chatTitle.textContent);
    const chatId = chatTitle.getAttribute('data-chatId')

    const response = await updateChat(newName, chatId)

    if (response.ok){

        chatTitle.textContent = newName;
        window.location.href = `/chats/${chatId}`
    } else{
        //ERROR!
        alert("Something went wrong")
    }
});

deleteButton.addEventListener('click', async () => {
    const chatId = chatTitle.getAttribute('data-chatId')

    const res = await deleteChat(chatId)

    if(res.ok){
        alert("Chat has been deleted")
        window.location.href = `/`
    }else{
        //ERROR!
        alert("Something went wrong
    }
    
});


sendButton.addEventListener("click", async () => {
    const messageInputElement = document.getElementById('msg')
    const text = messageInputElement.value

    const createdByUser = sendButton.getAttribute('data-userId')
    const postedToChat = chatId.getAttribute('data-chatId')
    
    const reponse = await sendMessage(createdByUser, postedToChat, text)

    if(reponse.ok){
        window.location.href = `/chats/${postedToChat}`
    }else {
        //Error
    }
})