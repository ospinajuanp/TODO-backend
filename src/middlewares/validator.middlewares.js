const validateSchema = (schema) => (req, res, next) => {
    
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        console.log(error)
        return res.status(400).json({ status: 400, message: error.errors.map(error => error.message) })
    }
}

export { validateSchema }