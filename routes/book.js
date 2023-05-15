const express = require ("express")
const router = express.Router()
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require("../controllers/bookController.js")
const { bookImageUpload } = require("../middleware/imageUpload.js")
const { authenticate } = require("../middleware/authenticate")

router.get('/books', authenticate, getAllBooks)
router.get('/books/:id', getBookById)
router.post('/books', bookImageUpload.single('image'), createBook)
router.put('/books/:id', bookImageUpload.single('image'), updateBook)
router.delete('/books/:id', deleteBook)

module.exports = router