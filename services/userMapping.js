import { loadUsers } from "./fileReaders.js";

export async function getUserMapping(){
    const users = await loadUsers()

    let userMapping = {}

    users.forEach(user => {
        userMapping[user.id] = user.username
    });
    
    return userMapping
}