require("dotenv").config();
const express = require('express');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');


const router = express.Router();

/**
 * fileAWS IMAGE STORING STARTS
 */
const s3 = new aws.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	Bucket: process.env.AWS_BUCKET_NAME,
});

/**
 * Single Upload
 */
const fileAWSImgUpload = multer({
	storage: multerS3({
		s3: s3,
		bucket: process.env.AWS_BUCKET_NAME,
		acl: 'public-read',
		key: function (req, file, cb) {
			cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
		}
	}),
	limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	}
}).single('fileAWSImage');

/**
 * Check File Type
 * @param file
 * @param cb
 * @return {*}
 */
function checkFileType(file, cb) {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);
	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb('Error: Images Only!');
	}
}

router.get("/", async (req, res) => {
	try {
		s3.listObjects({ Bucket: process.env.AWS_BUCKET_NAME }, (err, data) => {
			if (err) throw err;

			res.json(data)
		})

	} catch (error) {
		console.log(error.message)
		res.sendStatus(500)
	}
})

/**
 * @route POST /api/fileAWS/business-img-upload
 * @desc Upload post image
 * @access public
 */
router.post('/fileAWS-upload', (req, res) => {
	fileAWSImgUpload(req, res, (error) => {
		console.log('requestOkokok', req.file);
		console.log('error', error);
		if (error) {
			console.log('errors', error);
			res.json({ error: error });
		} else {
			// If File not found
			if (req.file === undefined) {
				console.log('Error: No File Selected!');
				res.json('Error: No File Selected');
			} else {
				// If Success
				const imageName = req.file.key;
				const imageLocation = req.file.location;
				// Save the file name into database into fileAWS model
				res.json({
					image: imageName,
					location: imageLocation
				});
			}
		}
	});
});

router.post('/fileAWS-delete', (req, res) => {
	console.log("delete button");
	const awsCredentials = {
		AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
		AWS_ACCESS_KEY_ID: process.env.AWS_SECRET_ACCESS_KEY,
		AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
		AWS_REGION: process.env.AWS_REGION
	}
	var s3 = new aws.S3(awsCredentials);
	s3.deleteObject({
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: `i + '-img'`
	}, function (error, data) {
		if (error) console.log("Error", error);
		else console.log(data);
	})
})

/**
 * BUSINESS GALLERY IMAGES
 * MULTIPLE FILE UPLOADS
 */
// Multiple File Uploads ( max 4 )
const uploadsBusinessGallery = multer({
	storage: multerS3({
		s3: s3,
		bucket: process.env.AWS_BUCKET_NAME,
		acl: 'public-read',
		key: function (req, file, cb) {
			cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
		}
	}),
	limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	}
}).array('galleryImage', 4);


/**
 * @route POST /api/fileAWS/multiple-file-upload
 * @desc Upload business Gallery images
 * @access public
 */
router.post('/multiple-file-upload', (req, res) => {
	uploadsBusinessGallery(req, res, (error) => {
		console.log('files', req.files);
		if (error) {
			console.log('errors', error);
			res.json({ error: error });
		} else {
			// If File not found
			if (req.files === undefined) {
				console.log('Error: No File Selected!');
				res.json('Error: No File Selected');
			} else {
				// If Success
				let fileArray = req.files,
					fileLocation;
				const galleryImgLocationArray = [];
				for (let i = 0; i < fileArray.length; i++) {
					fileLocation = fileArray[i].location;
					console.log('filenm', fileLocation);
					galleryImgLocationArray.push(fileLocation)
				}
				// Save the file name into database
				res.json({
					filesArray: fileArray,
					locationArray: galleryImgLocationArray
				});
			}
		}
	});
});

module.exports = router;