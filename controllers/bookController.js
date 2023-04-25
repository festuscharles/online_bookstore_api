const Book = require("../models/Book")

// GET all books
const getAllBooks = async (req, res, next) => {
    try{
        const books = await Book.find()
        res.status(200).json(books)
    } catch (err) {
        next(err)
    }
}

//GET a book by id
const getBookById = async (req, res, next) => {
    try{
        const book = await Book.findById(req.params.id)
        if(!book) return res.status(404).json({ message: "Book not found" })
        res.status(200).json(book)
    } catch (err) {
        next(err)
    }
}

// CREATE a new book
const createBook = async(req, res, next) => {
    try{

    } catch (err) {

    }
}




module.exports = {
    getAllBooks, 
    getBookById,
}