module.exports = function (Henle) {
    Henle.disableRemoteMethod("create", true);
    Henle.disableRemoteMethod("upsert", true);
    Henle.disableRemoteMethod("updateAll", true);
    Henle.disableRemoteMethod("deleteById", true);
    Henle.disableRemoteMethod("updateAttributes", false);
    Henle.disableRemoteMethod('createChangeStream', true);
    Henle.disableRemoteMethod("count", true);
};
