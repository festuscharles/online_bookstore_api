const express = require("express")
const router = express.Router()
const { signUp, logIn, logOut } = require("../controllers/authController")

router.post("/signup", signUp)
router.post("/login", logIn)
router.get("/logout", logOut)