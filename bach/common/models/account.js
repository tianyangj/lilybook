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

    Account.disableRemoteMethod('__delete__bookmarks', false);

    // remote methods
    Account.bookmarks = function (cb) {

        let context = loopback.getCurrentContext();
        let accessToken = context.get('accessToken');
        let userId = accessToken.userId;
        let Bookmark = Account.app.models.Bookmark;
        let Composition = Account.app.models.Composition;
        let Composer = Account.app.models.Composer;

        Bookmark.find({
            fields: {
                compositionId: true,
                createdAt: true
            },
            where: {
                userId: userId
            }
        }).then(bookmarks => {
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
                    id: { inq: bookmarks.map(bookmark => bookmark.compositionId) }
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
                    bookmarks.forEach(bookmark => {
                        bookmark.composition = compositionMap[bookmark.compositionId];
                        bookmark.composer = composerMap[bookmark.composition.composerId];
                    });
                    cb(null, bookmarks);
                });
            });
        });
    };

    Account.remoteMethod('bookmarks', {
        returns: { type: 'array', root: true },
        http: { path: '/bookmarks', verb: 'get' }
    });

};
