import express from "express"

const router = express.Router()

router.get("/homePage", (req, res) => {
    res.send("You have hit the homepage")
})

router.get("/loginPage", (req, res) => {
    res.send("This is the login page")
})

export default router