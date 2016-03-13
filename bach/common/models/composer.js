module.exports = function(Composer) {
    Composer.disableRemoteMethod('__create__compositions', false);
    Composer.disableRemoteMethod('__delete__compositions', false);
    Composer.disableRemoteMethod('__findById__compositions', false);
    Composer.disableRemoteMethod('__destroyById__compositions', false);
    Composer.disableRemoteMethod('__updateById__compositions', false);
    Composer.disableRemoteMethod('createChangeStream', true);
    Composer.disableRemoteMethod("updateAll", true);
    Composer.disableRemoteMethod("count", true);
};
