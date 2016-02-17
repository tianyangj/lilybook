module.exports = function (app) {

    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

    //create the admin role
    Role.create({
        name: 'admin'
    }).then(function (role) {
        console.log('Created role:', role);
        //make tianyangj@gmail.com an admin
        return role.principals.create({
            principalType: RoleMapping.USER,
            principalId: '56c3faa6882b30438c9ca54e'
        });
    }).then(function (principal) {
        console.log('Created principal:', principal);
    }).catch(function (err) {
        console.log('Error:', err);
    });
};