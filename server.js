const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./config");
const routes = require("./routes");
const bodyParser = require( 'body-parser' );

// connects with fileAWS.js
const router = express.Router();

const app = express();

// middleware to parse data
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

module.exports = router;

const fileAWS = require( './routes/api/fileAWS' );
app.use( '/api/fileAWS', fileAWS );

// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./client/build")))
};

// connect to Mongo DB 
mongoose.connect(config.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: true 
})
    .then(() => console.log(`Mongo DB Succesfully Connected`))
    .catch(err => console.log(err));

// use routes
app.use(routes);

// check for "production" enviroment and set port
const PORT = process.env.PORT || 3001;

// start server
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})