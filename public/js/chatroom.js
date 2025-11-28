/* IMPORT OF FUNCTIONS */
import { updateChat } from './updateChat.js'
import { deleteChat } from './deleteChat.js'
import { sendMessage } from './sendMessage.js'
import { deleteMessage } from './deleteMessage.js'



const chatHeader = document.getElementById('chatHeader');
const chatTitle = document.getElementById('chatId');

const deleteButton = document.getElementById('deleteButton');

const sendButton = document.getElementById("sendButton")

const userLevel = chatTitle.getAttribute('data-chatLevel')
const createdByUser = chatTitle.getAttribute('data-createdByUser')
const userId = chatTitle.getAttribute('data-userId')

chatHeader.addEventListener('click', async (e) => {
    if (e.target === deleteButton) return; 

    if(createdByUser !== userId || userLevel < 3) return

    const newName = prompt("Enter new chat name:", chatTitle.textContent);
    if(!newName) return 

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

if(deleteButton){
    deleteButton.addEventListener('click', async () => {
        const chatId = chatTitle.getAttribute('data-chatId')

        const res = await deleteChat(chatId)

        if(res.ok){
            alert("Chat has been deleted")
            window.location.href = `/`
        }else{
            //ERROR!
            alert("Something went wrong")
        }
    });
}


if(sendButton){
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
}

document.querySelectorAll(".deleteMessage").forEach(button => {

    button.addEventListener("click", async () => {
        //const invokedByUser = button.getAttribute('data-userId')
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
