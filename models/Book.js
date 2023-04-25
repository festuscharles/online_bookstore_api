const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categories: {
        type: String,
        required: true
    }, 
    quantity: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamp: true})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book