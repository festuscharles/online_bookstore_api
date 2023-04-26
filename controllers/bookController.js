const Book = require("../models/Book")

// GET all books
exports.getAllBooks = async (req, res, next) => {
    try{
        const books = await Book.find()
        res.status(200).json(books)
    } catch (err) {
        next(err)
    }
}

//GET a book by id
exports.getBookById = async (req, res, next) => { 
    try{
        let bookId = req.params.id
        const book = await Book.findById(bookId)
        if(!book) return res.status(404).json({ message: "Book not found" })
        res.status(200).json(book)
    } catch (err) {
        next(err)
    }
}

// CREATE a new book
exports.createBook = async (req, res, next) => {
    try{
        let book = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description, 
            price: req.body.price,
            categories: req.body.categories,
            quantity: req.body.quantity,
            imageUrl: req.body.imageUrl
        }
        await Book.create(book)
        res.status(200).json({ message: "Book created successfully"})
    } catch (err) {
        next(err)
    }
}

//UPDATE a book
exports.updateBook = async (req, res, next) => {
    try{
        let bookId = req.params.id
        let updateBookData = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description, 
            price: req.body.price,
            categories: req.body.categories,
            quantity: req.body.quantity,
            imageUrl: req.body.imageUrl
        }
        await Books.findOneAndUpdate(bookId, {$set: updateBookData})
        res.status(201).json({ message: "Book updated succesfully"})
    } catch (err) {
        next(err)
    }
}

//DELETE a book
exports.deleteBook = async (req, res, next) => {
    try {
        let bookId = req.params.id
        await Book.findByIdAndRemove(bookId)
        res.status(200).json({message: "Book deleted successfully"})
    } catch (err) {
        next(err)
    }
}