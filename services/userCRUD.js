import User from "../models/user.js"
import { loadUsers } from "./fileReaders.js"

export function createUser (username, password, userLevel) {
    const user = new User(null, username, password, new Date().toLocaleDateString('en-GB'), userLevel)
    return user
}

export async function deleteUser (userId) {
    const users = await loadUsers()

    const user = users.find(currentUser => currentUser.id === userId)
    if (!user) {
        throw new Error('user.find() returned undefined')
    }
    console.log(`found user: ${user.id}`)
    const index = users.indexOf(user)

    users.splice(index, 1)
    
    return users
} 