
export default class User {
    static #globalIdentification = 1

    constructor (id, username, password, dateOfCreation, userLevel) {
        if (id == null) {
            this.id = User.#globalIdentification++ 
        } else {
            this.id = id
            if (this.id >= User.#globalIdentification){
                User.#globalIdentification = this.id + 1
            }
        }
        this.username = username
        this.password = password
        this.dateOfCreation = dateOfCreation
        this.userLevel = userLevel
    }

}