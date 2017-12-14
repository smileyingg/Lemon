const passport = require('passport');
const mongoose = require('mongoose');

module.exports = () => {
    var User = mongoose.model('User');

    passport.serializeUser((user, done) => {
        done(null, user.id);
        // after authenticate, save user.id in cookie on browser
    });

    passport.deserializeUser((id, done) => {
        User.findOne({ _id: id }, '-password -salt', (err, user) => {
            done(err, user); // get user from database by id
        });
    });

    require('./strategies/local')();
    require('./strategies/google')();
}
