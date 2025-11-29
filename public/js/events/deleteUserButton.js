import { deleteUser } from "../api/userRequests.js";

const deleteUserButtons = document.querySelectorAll('.deleteUserButton')

deleteUserButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', async () => {
        const userId = parseInt(deleteButton.getAttribute('data-userId'))
        console.log(`userId: ${userId}`);

        if (!userId) {
            console.error('undefined userid')
        }

        const response = await deleteUser(userId)

        if (response.ok) {
            window.location.href = `/accounts`
        }
    })
})
