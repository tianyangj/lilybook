module.exports = function(Playlist) {
    Playlist.disableRemoteMethod('createChangeStream', true);
};
