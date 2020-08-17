module.exports = (req, res, next) => {
    // save category name and image
    if (typeof (req.file) === 'undefined' || typeof (req.body) === 'undefined') {
        return res.status(400).json({
            errors: 'problem with sending data'
        })
    }
    // get image and name
    console.log(req.body.name)
    let name = req.body.name
    let image = req.file.path

    console.log(req.file)

    // check image type: png, jpeg, jpg
    if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('png') && !(req.file.mimetype).includes('jpg')) {
        fs.unlinkSync(req.file.path)
        return res.status(400).json({
            errors: "file not support"
        })
    }
    // if file is larger than 1024 x 1024
    if (req.file.size > 1024 * 1024) {
        fs.unlinkSync(req.file.path)
        return res.status(400).json({
            errors: "File is Too large"
        })
    }
    console.log(req.file)

    // if file field is empty
    if (!name || !image) {
        return res.status(400).json({
            sucess: false,
            message: "all fields are required"
        })
    }

    next()
}