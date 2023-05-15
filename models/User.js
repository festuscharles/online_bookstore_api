const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user' 
    }, 
    image: {
        type: String,
        required: false
    }
}, { timestamp: true })

exports.User = mongoose.model('User', userSchema)