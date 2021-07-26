const fs = require('fs');
const content = require('iptv-playlist-parser');

const playlist = fs.readFileSync(__dirname + './../Playlists/channels-ssiptv.m3u', { encoding: 'utf-8' });
const result = content.parse(playlist);


exports.get = (req, res, next) => {
    res.status(200).send(result);
};