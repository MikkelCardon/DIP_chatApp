import fs from 'fs/promises'

const chatsPath = './chats.json'
const usersPath = './users.json'

export async function updateChats (chats) {
    try {
        // for at holde formatteringen af chats.json kræver det at vi bruger en wrapper
        // bør overvejes om vi overhovedet bør gøre dette - vi har ikke andre objekter i JSON filen
        const chatsWrapper = { chats }
        await fs.writeFile(chatsPath, JSON.stringify(chatsWrapper), null, 2)
    } catch (error) {
        console.error(`updateChats(): ${error.message}`)
    }
}

export async function updateUsers (users) {
    try {
        const usersWrapper = { users }
        await fs.writeFile(usersPath, JSON.stringify(usersWrapper), null, 2)
    } catch (error) {
        console.error(`updateUsers(): ${error.message}`)
    }
}