const jwt = require('jsonwebtoken')

exports.authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decode
        next()
    } catch (err) {
        if(err.name == "TokenExpiredError") res.status(401).json({ message: 'Token Expired' })
        else res.json({message: 'Authentication failed'})
    }
}
