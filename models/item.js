module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        location: {
             type: DataTypes.STRING,
             allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.DECIMAL,
            //add money validation
        },
        date_purchased: {
            type: DataTypes.DATEONLY,
            //optional
        },
        purchase_price: {
            type: DataTypes.DECIMAL,
            //add money validation
        },
        serial_number: DataTypes.STRING,
        image: DataTypes.STRING,
        notes: DataTypes.TEXT
    },
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