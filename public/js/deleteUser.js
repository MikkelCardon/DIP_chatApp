
const deleteUserButtons = document.querySelectorAll('.deleteUserButton')

deleteUserButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', async () => {
        const userId = parseInt(deleteButton.getAttribute('data-userId'))

        if (!userId) {
            console.error('undefined userid')
        }

        const response = await deleteRequest(userId)

        if (response.ok) {
            window.location.href = `/accounts`
        } else{
            alert("Can't do that!")
        }
    })
})


async function deleteRequest (userId) {
    const response = await fetch('/accounts', {
        method: 'DELETE',
        body: JSON.stringify({userId: userId}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}