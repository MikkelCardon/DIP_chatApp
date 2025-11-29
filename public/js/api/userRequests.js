
export async function createUser (username, password, userLevel) {
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

export async function loginUser(username, password) {
    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password })
    })
    return response
}

export async function deleteUser (userId) {
    const response = await fetch('/accounts', {
        method: 'DELETE',
        body: JSON.stringify({userId: userId}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}