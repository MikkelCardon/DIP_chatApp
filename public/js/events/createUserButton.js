import { createUser } from "../api/userRequest.js"

const registerUserButton = document.getElementById('registerUserButton')

registerUserButton.addEventListener('click', async () => {
    const usernameInputElement = document.getElementById('usernameInput')
    const passwordInputElement = document.getElementById('passwordInput')
    const userLevelInputElement = document.getElementById('userLevelInput')

    if (!usernameInputElement || !passwordInputElement || !userLevelInputElement) {
        console.error('undefined input elements')
    }

    const username = usernameInputElement.value
    const password = passwordInputElement.value
    const userLevel = parseInt(userLevelInputElement.value)

    if (isInputEmpty(username, password)) {
        alert('Please fill out all required fields')
    } else if (isUserLevelInvalid(userLevel)) {
        alert('Please provide a user level between 1 and 3')
        return
    }

    const response = await createUser (username, password, userLevel)

    if (response.ok) {
        window.location.href = `/accounts`
    }
})

function isInputEmpty (username, password) {
    return username.length <= 0 || password.length <= 0
}

function isUserLevelInvalid (userLevel) {
    return userLevel < 1 || userLevel > 3
}
