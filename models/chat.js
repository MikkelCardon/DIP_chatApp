

export default class Chat {
    static #globalIdentification = 1

    constructor (id, name, dateOfCreation, createdByUser, messages) {
        if (id == null) {
            this.id = Chat.#globalIdentification++
        } else {
            this.id = id
        }
        this.name = name
        this.dateOfCreation = dateOfCreation
        this.createdByUser = createdByUser
        this.messages = messages
    }

}
