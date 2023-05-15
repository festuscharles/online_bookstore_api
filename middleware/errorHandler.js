exports.errorhandler = (err, eq, res, next) => {

    //Check if the error is a server error
    const statusCode = err.status || 500
    const errorMessage = err.message || "Internal Server Error"

    //Log the error to the console
    console.error(err)
    
    // Send an error response to the client
    res.status(statusCode).json({ error: errorMessage})
}