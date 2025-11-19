

export class Chat {
    static #globalIdentification = 1

    constructor (id, dateOfCreation, createdByUser, messages) {
        if (id == null) {
            this.id = Chat.#globalIdentification++
        } else {
            this.id = id
        }
        this.dateOfCreation = dateOfCreation
        this.createdByUser = createdByUser
        this.messages = messages
    }

}
