const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const PORT = process.env.PORT || 4000
const UserRoute = require("./routes/auth")
const BookRoute = require("./routes/book")



require("dotenv").config()

mongoose.connect("mongodb://127.0.0.1:27017/bookstoredb")
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
app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

app.use('/api/auth', UserRoute)
app.use('/api/', BookRoute) 