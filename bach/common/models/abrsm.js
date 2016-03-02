module.exports = function (Abrsm) {
    Abrsm.disableRemoteMethod("create", true);
    Abrsm.disableRemoteMethod("upsert", true);
    Abrsm.disableRemoteMethod("updateAll", true);
    Abrsm.disableRemoteMethod("deleteById", true);
    Abrsm.disableRemoteMethod("updateAttributes", false);
    Abrsm.disableRemoteMethod('createChangeStream', true);
    Abrsm.disableRemoteMethod("count", true);
};
