module.exports = function (Key) {
    Key.disableRemoteMethod("create", true);
    Key.disableRemoteMethod("upsert", true);
    Key.disableRemoteMethod("updateAll", true);
    Key.disableRemoteMethod("deleteById", true);
    Key.disableRemoteMethod("updateAttributes", false);
    Key.disableRemoteMethod('createChangeStream', true);
    Key.disableRemoteMethod("count", true);
};
