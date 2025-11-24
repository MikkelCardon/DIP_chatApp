import Message from '../models/message.js'

export function createMessage (id, createdByUser, dateOfCreation, postedToChat, text) {
    const user = new Message (id, createdByUser, dateOfCreation, postedToChat, text) 
    return user
}
