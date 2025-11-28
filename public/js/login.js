const loginButton = document.getElementById('loginButton')
const usernameInput = document.getElementById('usernameInputElement')
const passwordInput = document.getElementById('passwordInputElement')


loginButton.addEventListener('click', async () => {
    console.log('login button clicked');
    const username = usernameInput.value
    const password = passwordInput.value
    try {

        const user = await post(username, password)

    } catch (error) {
        console.log('Error');
    }
})


async function post(username, password) {
    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password })
    })
    if (response.status === 200) {
        window.location.href = "/"
    }
}