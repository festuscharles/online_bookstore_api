const express = require("express")
const router = express.Router()
const { getAllBooks, getBookById, createBook, updateBookData, deleteBook } = require("../controllers/bookController.js")

router.get("/books", getAllBooks)
router.get("/books/:id", getBookById)
router.post("/books", createBook)
router.put("books/:id", updateBookData)
router.delete("books/:id", deleteBook)