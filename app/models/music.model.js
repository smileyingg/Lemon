const mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var MusicSchema = new Schema ({
    songid : String,
    songname: String,
    artist: String,
    album: String,
    created: {
        type: Date,
        default: Date.now
    }
})
const Music = module.exports = mongoose.model('Music', MusicSchema)
