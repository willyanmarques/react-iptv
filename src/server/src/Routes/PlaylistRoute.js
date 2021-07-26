const PlaylistRoute = require('../Controllers/PlaylistController');

module.exports = (app) => {
    app.get('/playlist-iptv', PlaylistRoute.get);
}