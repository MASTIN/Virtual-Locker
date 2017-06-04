module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //validate for email
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            //validate for password requirements
        }
    });
    return User;
}