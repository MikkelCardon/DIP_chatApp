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

    const response = await createUser (username, password, userLevel)

    if (response.ok) {
        window.location.href = `/accounts`
    }
})

