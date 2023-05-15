const express = require("express")
const router = express.Router()
const { signUp, logIn, logOut } = require("../controllers/authController")
const { userImageUpload } = require("../middleware/imageUpload")
 
router.post("/signup", userImageUpload.single('image'), signUp)
router.post("/login", logIn)
router.get("/logout", logOut)

module.exports = router