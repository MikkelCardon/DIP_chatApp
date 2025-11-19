import express from "express"

const loginRouter = express.Router()

loginRouter.get("/homePage", (req, res) => {
    res.send("You have hit the homepage")
})

loginRouter.get("/loginPage", (req, res) => {
    res.send("This is the login page")
})

export default loginRouter