module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    //USERS TO ITEMS ASSOCIATION- Each user has many Items
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