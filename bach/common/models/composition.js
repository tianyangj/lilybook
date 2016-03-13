module.exports = function(Composition) {
    Composition.disableRemoteMethod('createChangeStream', true);
    Composition.disableRemoteMethod("updateAll", true);
};
