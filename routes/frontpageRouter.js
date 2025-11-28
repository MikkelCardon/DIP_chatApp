import express from 'express';
import { createChat } from '../services/chatCRUD.js'
import { loadChats } from '../services/fileReaders.js';
import { updateChats } from '../services/fileWriters.js';

const router = express.Router();

router.get('/', async (request, response) => {
    let chats;
    try {
        chats = await loadChats()
    } catch (error) {
        console.error(`await loadChats(): ${error.message}`)
    }

    response.render('homePage', 
        {
            title: 'HomePage',
            userLevel: request.session.userLevel,
            chats: chats
        }
    )
})

router.post('/createchat', async (request, response) => {
    const { name } = request.body
    const createdByUser = parseInt(request.session.userId)
    console.log("Created by user (post): ", createdByUser);

    const chat = createChat(name, createdByUser)
    console.log(chat);

    try {
        const chats = await loadChats()
        chats.push(chat)
        await updateChats(chats)
    } catch (error) {
        console.error(`router.post('/createchat',...): ${error.message}`)
        response.sendStatus(401)
    }
    
    response.json({chatId : chat.id})
})

router.get('/logout', (request, response) => {
  request.session.destroy
  response.redirect('/login')
})

export default router;