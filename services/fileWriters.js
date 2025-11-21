import fs from 'fs/promises'

const path = './chats.json'

export async function updateChats (chats) {
    try {
        // for at holde formatteringen af chats.json kræver det at vi bruger en wrapper
        // bør overvejes om vi overhovedet bør gøre dette - vi har ikke andre objekter i JSON filen
        const chatsWrapper = { chats }
        await fs.writeFile(path, JSON.stringify(chatsWrapper), null, 2)
    } catch (error) {
        console.error(`updateChats(): ${error.message}`)
    }
}