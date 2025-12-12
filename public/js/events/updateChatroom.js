import { updateChat, deleteChat } from '../api/chatRequest.js'

const chatHeader = document.getElementById('chatHeader');
const chatTitle = document.getElementById('chatId');

const deleteChatButton = document.getElementById('deleteButton');

const userLevel = chatTitle.getAttribute('data-chatLevel')
const createdByUser = chatTitle.getAttribute('data-createdByUser')
const userId = chatTitle.getAttribute('data-userId')

chatHeader.addEventListener('click', async (e) => {
    if (e.target === deleteChatButton) return; 

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

if(deleteChatButton){
    deleteChatButton.addEventListener('click', async () => {
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


