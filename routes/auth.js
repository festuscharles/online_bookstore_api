const express = require("express")
const router = express.Router()
const { signUp, logIn } = require("../controllers/authController")

router.post("/signup", signUp)
router.post("/login", logIn)