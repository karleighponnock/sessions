const multer = require('multer');
const path = require('path');

// set storage; file name
const storage = multer.diskStorage({
    // destination uplaods folder
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        console.log(file)
        // sets unique name
        cb(null, 'sessionImages' + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    cb(null, true);
};

let upload = multer({
    storage: storage,

    fileFilter: fileFilter,
});

// exports upload as multiple files (can change to single)
module.exports = upload.single('categoryImage')