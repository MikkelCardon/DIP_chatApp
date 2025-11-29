import { deleteChat } from '../api/chatRequests.js'

const deleteButton = document.getElementById('deleteButton');
const chatTitle = document.getElementById('chatId');

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
