import express from "express"

const userRouter = express.Router()

userRouter.get("/homePage", (req, res) => {
    res.send("You have hit the homepage")
})

userRouter.get("/loginPage", (req, res) => {
    res.send("This is the login page")
})

export default userRouter