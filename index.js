const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000
const UserRoute = require("./routes/auth")
const BookRoute = require("./routes/book")
require("dotenv").config()

mongoose.connect("mongodb://localhost:27017/bookstoredb")
const db = mongoose.connection

db.on('err', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

app.use('/api/auth', UserRoute)
app.use('/api/books', BookRoute)