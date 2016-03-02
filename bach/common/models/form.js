module.exports = function (Form) {
    Form.disableRemoteMethod("create", true);
    Form.disableRemoteMethod("upsert", true);
    Form.disableRemoteMethod("updateAll", true);
    Form.disableRemoteMethod("deleteById", true);
    Form.disableRemoteMethod("updateAttributes", false);
    Form.disableRemoteMethod('createChangeStream', true);
    Form.disableRemoteMethod("count", true);
};
