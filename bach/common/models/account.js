'use strict';

var loopback = require('loopback');

module.exports = function (Account) {

    Account.disableRemoteMethod("get", true);
    Account.disableRemoteMethod("create", true); // Removes (POST) /Accounts
    Account.disableRemoteMethod("upsert", true); // Removes (PUT) /Accounts
    Account.disableRemoteMethod("deleteById", true); // Removes (DELETE) /Accounts/:id
    Account.disableRemoteMethod("updateAll", true); // Removes (POST) /Accounts/update
    Account.disableRemoteMethod("updateAttributes", false); // Removes (PUT) /Accounts/:id
    Account.disableRemoteMethod('createChangeStream', true); // Removes (GET|POST) /Accounts/change-stream

    Account.disableRemoteMethod("find", true);
    Account.disableRemoteMethod("findOne", true);
    Account.disableRemoteMethod("count", true);
    Account.disableRemoteMethod("exists", true);

    Account.disableRemoteMethod('__count__accessTokens', false);
    Account.disableRemoteMethod('__create__accessTokens', false);
    Account.disableRemoteMethod('__delete__accessTokens', false);
    Account.disableRemoteMethod('__destroyById__accessTokens', false);
    Account.disableRemoteMethod('__findById__accessTokens', false);
    Account.disableRemoteMethod('__get__accessTokens', false);
    Account.disableRemoteMethod('__updateById__accessTokens', false);

    Account.disableRemoteMethod('__delete__playlists', false);

    // remote methods
    Account.bookmarks = function (cb) {

        let context = loopback.getCurrentContext();
        let accessToken = context.get('accessToken');
        let userId = accessToken.userId;
        let Playlist = Account.app.models.Playlist;
        let Composition = Account.app.models.Composition;
        let Composer = Account.app.models.Composer;

        Playlist.find({
            fields: {
                compositionId: true,
                createdAt: true
            },
            where: {
                userId: userId
            }
        }).then(playlists => {
            Composition.find({
                fields: {
                    id: true,
                    title: true,
                    form: true,
                    thumbnail: true,
                    composerId: true,
                    vanity: true
                },
                where: {
                    id: { inq: playlists.map(playlist => playlist.compositionId) }
                }
            }).then(compositions => {
                Composer.find({
                    fields: {
                        id: true,
                        name: true,
                        fullname: true,
                        image: true
                    },
                    where: {
                        id: { inq: compositions.map(composition => composition.composerId) }
                    }
                }).then(composers => {
                    let composerMap = composers.reduce((prev, curr) => {
                        prev[curr.id] = curr;
                        return prev;
                    }, {});
                    let compositionMap = compositions.reduce((prev, curr) => {
                        prev[curr.id] = curr;
                        return prev;
                    }, {});
                    playlists.forEach(playlist => {
                        playlist.composition = compositionMap[playlist.compositionId];
                        playlist.composer = composerMap[playlist.composition.composerId];
                    });
                    cb(null, playlists);
                });
            });
        });
    };

    Account.remoteMethod('bookmarks', {
        returns: { type: 'array', root: true },
        http: { path: '/bookmarks', verb: 'get' }
    });

};
