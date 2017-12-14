var music = require('../controllers/music.controller');

module.exports = (app) => {
    var path = '/api/music';
    
app.post(path + '/add', music.create);
app.get(path+ '/add', music.getMusics);
app.delete(path + '/delete/:id', music.delete);
}
