
export class User {
    static #globalIdentification = 1

    constructor (id, username, password, dateOfCreation, userLevel) {
        if (id == null) {
            this.id = User.#globalIdentification++
        } else {
            this.id = id
        }
        this.username = username
        this.password = password
        this.dateOfCreation = dateOfCreation
        this.userLevel = userLevel
    }

}