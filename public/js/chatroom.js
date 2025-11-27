/* IMPORT OF FUNCTIONS */
import { updateChat } from './updateChat.js'



const chatHeader = document.getElementById('chatHeader');
const chatTitle = document.getElementById('chatId');

const deleteButton = document.getElementById('deleteButton');


chatHeader.addEventListener('click', async (e) => {
    if (e.target === deleteButton) return; 

    const newName = prompt("Enter new chat name:", chatTitle.textContent);
    const chatId = updateChatButton.getAttribute('data-chatId')

    const response = await updateChat(newName, chatId)

    if (response.ok){

        chatTitle.textContent = newName;
        window.location.href = `/chats/${chatId}`
    } else{
        //ERROR!
    }
});

deleteButton.addEventListener('click', () => {
    alert("Cancel clicked");
    //DELETE REQUEST
});
