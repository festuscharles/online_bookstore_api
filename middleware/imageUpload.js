const multer = require("multer")

// Create multer storage object for book image upload
const bookImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/bookImages")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${file.originalname}`
        cb(null, `${file.fieldname}-${uniqueSuffix}`)
    }
})

// Create multer storage object for user image upload
const userImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/userImages")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${file.originalname}`
        cb(null, `${file.fieldname}-${uniqueSuffix}`)
    }
})

// Create multer upload object for book image and user image
exports.bookImageUpload = multer({ 
    storage: bookImageStorage,
    fileFilter: function (req, file, cb) {
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/png"
        ) cb (null, true)
        else {
            console.log("Only jpeg, jpg and png files are supported")
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 4
    }
})
exports.userImageUpload = multer({ 
    storage: userImageStorage,
    fileFilter: function (req, file, cb) {
        if(
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/png"
        ) cb (null, true)
        else {
            console.log("Only jpeg, jpg and png files are supported")
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 4
    } 
})
