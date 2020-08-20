const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewArtist = new Schema({
    Name: {
        type: String,
        require: true
    },
    Location: {
        type: String,
        require: true
    },
    Medium: {
        type: Array,
        require: true
    },
    image: {
        type: URL,
        require: true
    }
});

module.exports = NewArtist = mongoose.model("newArtist", NewArtistSchema);