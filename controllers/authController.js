const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

// SIGN UP a new user
exports.signUp = async (req, res, next) => {   
    try {
        const { name, email, password } = req.body
        const userExists = await User.findOne(email)
        if(userExists) return res.status(409).json({ message: "Email already exist"})
    
        //hash the password
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = {
            name,
            email,
            password: hashedPassword
        }
        const savedUser = await User.create(user)

        res.status(201).json({ 
            savedUser,
            message: "Sign up successful" 
        })
    } catch (err) {
        next(err)
    }
}

// LOG IN an existing user
exports.logIn = async (req, res, next) => {
    try{
        const { email, password } = req.body
        
        // check if user with email already exists
        const user = await User.findOne(email)
        if(!user) return res.status(401).json({ message: "Invalid email or  password" })

        // compare the hashed password with the given password
        const IsPasswordMatch = await bcrypt.compare( password, user.password)
        if(!IsPasswordMatch) return res.status(401).json({ message: "Invalid email or password" })

        // generate JWT token and send it in response
        const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.status(200).json({ 
            message: "Login successful",
            token 
        })
    } catch (err) {
        next(err)
    }
}

// LOG OUT a user
exports.logOut = (req, res, next) => {
    res.status(200).json({ message: "Logged out successfully"})
}