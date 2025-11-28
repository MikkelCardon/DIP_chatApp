import express from 'express'
import { loadUsers } from '../services/fileReaders.js'

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

export default router