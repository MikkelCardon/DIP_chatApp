import { loginUser } from "../api/userRequests.js"

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
        const response = await loginUser(username, password)

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

function wrongUsernameOrPassword () {
    alert('Incorrect username or password')
}

function contactSystemAdministrator () {
    alert('Too many failed attempts. Please contact system administrator')
}