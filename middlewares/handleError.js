const handleError = (cb) => async (req, res, next) => {
    try {
        await cb(req, res, next)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { handleError }