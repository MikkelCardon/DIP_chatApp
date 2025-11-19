import express from "express"

const userRouter = express.Router()

//Returns a list of Users
userRouter.get("/", async (request, response) => {
    const data = await fs.readFile("./users.json", 'utf-8')
    const usersJson = JSON.parse(data)
    const usersArray = usersJson.users

    response.json(usersArray)
})

userRouter.get("/:id", (request, response) => {
    
})

userRouter.get("/:id/messages", (request, response) => {
    const id = request.params.id

    response.send(`Endpoint not configured yet. Id request: `)
})

export default userRouter