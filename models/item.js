module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }, 
        location: {
             type: DataTypes.STRING,
             allowNull: false,
             validate: {
                 notEmpty: true
             }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.DECIMAL
        },
        date_purchased: {
            type: DataTypes.DATEONLY
        },
        purchase_price: {
            type: DataTypes.DECIMAL
        },
        serial_number: {
            type: DataTypes.STRING,
            allowNull: true
        },   
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        notes: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    },
    //ITEMS TO USERS ASSOCIATION - Each item belongs to one User
        { 
            classMethods: {
                associate: function(models) {
                    Item.belongsTo(models.User, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
    );
    return Item;
};