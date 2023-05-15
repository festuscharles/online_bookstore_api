const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const PORT = process.env.PORT || 5000
const UserRoute = require("./routes/auth")
const BookRoute = require("./routes/book")

require("dotenv").config()

mongoose.connect("mongodb://127.0.0.1:27017/bookstoredb")
const db = mongoose.connection

db.on('err', (err) => console.log(err))

db.once('open', () => console.log('Database Connection Established'))

// Middleware for handling errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

app.use('/api/auth', UserRoute)
app.use('/api', BookRoute)  