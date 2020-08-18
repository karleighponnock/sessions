const multer = require('multer');
const path = require('path');

// set storage; file name
const storage = multer.diskStorage({
    // destination uplaods folder
    destination: function (req, file, cb) {
        console.log(file)
        cb(null, './client/public/images/uploads/');
    },
    filename: function (req, file, cb) {
        // console.log(file)
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

// exports upload as multiple files (can change to multiple or single but only single is working here and not even that well)
module.exports = upload.single('categoryImage')