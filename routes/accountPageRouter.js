import express from 'express'
import { loadUsers } from '../services/fileReaders.js'
import { createUser, deleteUser } from '../services/userCRUD.js'
import { updateUsers } from '../services/fileWriters.js'

const router = express.Router()

router.get('/', async (request, response) => {
    const users = await loadUsers()
    const user = users.find(user => user.id == parseInt(request.session.userId))

    response.render('accountsPage', {
        title: 'accountpage',
        accessedUser: user,
        users: users
    })
})

router.post('/', async (request, response) => {
    const { username, password, userLevel } = request.body

    const user = createUser(username, password, userLevel)

    try {
        const users = await loadUsers()
        users.push(user)
        await updateUsers(users)
    } catch (error) {
        console.error(`router.post('/',...): ${error.message}`)
        response.sendStatus(401)
    }

    response.sendStatus(201)
})

router.delete('/', async (request, response) => {
    const { userId } = request.body
    const parsedUserId = parseInt(userId)

    const sessionUserId = parseInt(request.session.userId)

    if (parsedUserId === sessionUserId) {
        response.sendStatus(401)
        return
    }

    try {
        const updatedUsers = await deleteUser(parsedUserId)
        await updateUsers(updatedUsers)
    } catch (error) {
        console.error(`router.delete('/',...): ${error.message}`)
        response.sendStatus(401)
    }

    response.sendStatus(201)

})

export default router