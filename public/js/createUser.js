
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

    const response = await post (username, password, userLevel)

    if (response.ok) {
        window.location.href = `/accounts`
    }
})

async function post (username, password, userLevel) {
    const response = await fetch('/accounts', {
        method: 'POST',
        body: JSON.stringify(
            {
                username: username,
                password: password,
                userLevel: userLevel
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}