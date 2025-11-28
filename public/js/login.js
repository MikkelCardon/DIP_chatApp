const loginButton = document.getElementById('loginButton')
const usernameInput = document.getElementById('usernameInputElement')
const passwordInput = document.getElementById('passwordInputElement')

let failedLoginAttempts = 0

loginButton.addEventListener('click', async () => {
    if (failedLoginAttempts > 3) {
        contactSystemAdministrator()
        return
    }

    const username = usernameInput.value
    const password = passwordInput.value

    if (username.length <= 0 || password.length <= 0) {
        return
    }

    try {
        const response = await post(username, password)

        if (response.ok) {
            window.location.href = "/"
        } else {
            wrongUsernameOrPassword()
            failedLoginAttempts++
        }
        
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
    return response
}

function wrongUsernameOrPassword () {
    alert('Incorrect username or password')
}

function contactSystemAdministrator () {
    alert('Too many failed attempts. Please contact system administrator')
}