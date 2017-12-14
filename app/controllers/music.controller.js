var Music = require('mongoose').model('Music');
var path = require("path");

exports.getMusics = (req, res, next) => {
    Music.find((err, music) => {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(music);
        }
    });
}

exports.create = (req, res, next) => {
    var music = new Music(req.body);
    music.save((err) => {
        if (err) {
            console.log('Failure');
            return next(err);
        }
        else {
            console.log('Success');
            res.json(music);
        }
    });
}

exports.delete = (req, res, next) => {
    Music.findOneAndRemove({songid: req.params.id }, function (err, result) {
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
}
