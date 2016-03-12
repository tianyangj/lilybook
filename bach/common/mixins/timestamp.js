module.exports = function(Playlist, options) {
    Playlist.defineProperty('createdAt', { type: Date, default: '$now' });
}