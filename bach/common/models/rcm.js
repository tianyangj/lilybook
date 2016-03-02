module.exports = function (Rcm) {
    Rcm.disableRemoteMethod("create", true);
    Rcm.disableRemoteMethod("upsert", true);
    Rcm.disableRemoteMethod("updateAll", true);
    Rcm.disableRemoteMethod("deleteById", true);
    Rcm.disableRemoteMethod("updateAttributes", false);
    Rcm.disableRemoteMethod('createChangeStream', true);
    Rcm.disableRemoteMethod("count", true);
};
