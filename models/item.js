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
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        date_purchased: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        purchase_price: {
            type: DataTypes.DECIMAL,
            allowNull: true
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
        { //Item belongs to one User
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