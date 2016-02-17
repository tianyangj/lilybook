module.exports = function(Account) {
    Account.disableRemoteMethod("deleteById", true);
    Account.disableRemoteMethod('__delete__accessTokens', false);
    Account.disableRemoteMethod('__destroyById__accessTokens', false);
};
