
export class Message {
    static #globalIdentification = 1

    constructor (id, createdByUser, dateOfCreation, postedToChat, text) {
        if (id == null) {
            this.id = Message.#globalIdentification++
        } else {
            this.id = id
        }
        this.createdByUser = createdByUser
        this.dateOfCreation = dateOfCreation
        this.postedToChat = postedToChat
        this.text = text
    }

}