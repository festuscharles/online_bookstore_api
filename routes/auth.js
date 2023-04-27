const express = require("express")
const router = express.Router()
const { signUp, logIn, logOut } = require("../controllers/authController")
const { userImageUploadMiddleware } = require("../middleware/imageUpload")

router.post("/signup", userImageUploadMiddleware, signUp)
router.post("/login", logIn)
router.get("/logout", logOut)

module.exports = router