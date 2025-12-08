import { deleteUser } from "../api/userRequest.js"

const deleteUserButtons = document.querySelectorAll('.deleteUserButton')

deleteUserButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', async () => {
        const userId = parseInt(deleteButton.getAttribute('data-userId'))
        if (!userId) {
            console.error('undefined userid')
        }

        const response = await deleteUser(userId)

        if (response.ok) {
            window.location.href = `/accounts`
        } else{
            alert("Can't do that!")
        }
    })
})


