const Book = require("../models/Book")

// GET all books
exports.getAllBooks = async (req, res, next) => {
    try{
        const books = await Book.find({})
        res.status(200).json({books})
    } catch (err) {
        res.json({ message: err})
    }
}

//GET a book by id
exports.getBookById = async (req, res, next) => { 
    try{
        const bookId = req.params.id
        const book = await Book.findById(bookId)
        if(!book) return res.status(404).json({ message: "Book not found" })
        res.status(200).json(book)
    } catch (err) {
        res.json({ message: err})
    }
}

// CREATE a new book
exports.createBook = async (req, res, next) => {
    try{
        const { title, author, description, price, categories, quantity } = req.body
        const book = {
            title,
            author,
            description, 
            price,
            categories,
            quantity
        }
        if (req.files) {
            let path = ''
            req.files.forEach(function(files, index, arr) {
                path = path + files.path + ','
            })
            path = path.substring(0, path.lastIndexOf(','))
            employee.avatar = path
        }
        await Book.create(book)
        res.status(201).json({ message: "Book created successfully"})
    } catch (err) {
        res.json({ message: err})
    }
}

//UPDATE a book
exports.updateBook = async (req, res, next) => {
    try{
        const bookId = req.params.id
        const { title, author, description, price, categories, quantity } = req.body
        const imagePath = req.file.path
        const updateBookData = {
            title,
            author,
            description, 
            price,
            categories,
            quantity,
            image: imagePath
        }
        await Book.findOneAndUpdate(bookId, {$set: updateBookData})
        res.status(200).json({ message: "Book updated successfully"})
    } catch (err) {
        res.json({ message: err})
    }
}

//DELETE a book
exports.deleteBook = async (req, res, next) => {
    try {
        const bookId = req.params.id
        await Book.findByIdAndRemove(bookId)
        res.status(200).json({ message: "Book deleted successfully" })
    } catch (err) {
        res.json({ message: err})
    }
}