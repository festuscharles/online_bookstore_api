const express = require("express")
const router = express.Router()
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require("../controllers/bookController.js")
const { bookImageUploadMiddleware } = require("../middleware/imageUpload.js")
const { authenticate } = require("../middleware/authenticate")

router.get('/books', authenticate, getAllBooks)
router.get('/books/:id', getBookById)
router.post('/books',bookImageUploadMiddleware, createBook)
router.put('/books/:id', bookImageUploadMiddleware, updateBook)
router.delete('/books/:id', deleteBook)


module.exports = router