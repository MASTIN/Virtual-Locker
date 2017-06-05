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
    },
        {
            classMethods: {
                associate: function(models) {
                    User.hasMany(models.Item, {
                        //if a user is deleted, delete all their items too
                        onDelete: "cascade"
                    });
                }
            }
        }
    );
    return User;
};