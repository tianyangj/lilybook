'use strict';

var loopback = require('loopback');

module.exports = function (Playlist) {

    Playlist.disableRemoteMethod('createChangeStream', true);

    Playlist.checkBookmark = function (compositionId, cb) {

        let context = loopback.getCurrentContext();
        let accessToken = context.get('accessToken');
        if (!accessToken) {
            cb(null, false);
        } else {
            Playlist.find({
                fields: { compositionId: true },
                where: { userId: accessToken.userId }
            }).then(bookmarks => {
                let compositionIds = bookmarks.map(bookmark => bookmark.compositionId);
                cb(null, compositionIds.indexOf(compositionId) > -1);
            });
        }
    }

    Playlist.remoteMethod('checkBookmark', {
        accepts: { arg: 'compositionId', type: 'string', required: true },
        returns: { arg: 'bookmarked', type: 'boolean' },
        http: { path: '/checkBookmark', verb: 'get' }
    });
};
