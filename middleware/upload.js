const multer = require('multer');
const path = require('path');
// ****************** //
// const fs = require('fs');
// ******************* //

// set storage; file name
const storage = multer.diskStorage({
    // destination uplaods folder
    destination: function (req, file, cb) {
        cb(null, './client/public/images/uploads/');
        // ************************************************ //
        // var dir = "./clients/public/images/uploads/";
        // if (!fs.existsSync(dir)) {
        //     fs.mkdirSync(dir);
        // } cb(null, dir);
        // ************************************************* //
    },
    filename: function (req, file, cb) {
        // sets unique name
        cb(null, 'sessionImages' + '-' + Date.now() + path.extname(file.originalname));
        // ******************************* //
        // cb(null, file.originalname);
        // *****************************  //
    }
});

// ******************************************************** //
// var upload = multer({ storage: storage }).array('files', 12);

// app.post('/upload', (req,res,next) => {
//     upload(req,res,function (err) {
        
// if (err) {
//     return res.send("Something went wrongggg");
// }
// res.send("upload competeeee");
// });

// app.get("/", (req, res) => {
//     res.render("index");
// });
// ************************************************* //

const fileFilter = (req, file, cb) => {
    cb(null, true);
};

let upload = multer({ storage: storage,

    fileFilter: fileFilter,
});

// exports upload as multiple files (can change to multiple or single but only single is working here and not even that well)
module.exports = upload.single('categoryImage')