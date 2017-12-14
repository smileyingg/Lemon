const index = require('../controllers/index.controller');
const path = '/api/index';

module.exports = (app) => {
    app.get('/', index.index);
};
