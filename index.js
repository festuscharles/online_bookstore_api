const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000
require("dotenv").config()

mongoose.connect("mongodb://localhost:27017/bookstoredb")
const db = mongoose.connection

db.on('err', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})
 




app.listen(PORT, () => console.log(`App listening on port ${PORT}`))