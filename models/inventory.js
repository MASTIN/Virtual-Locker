module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        item_name: DataTypes.STRING,
        location: DataTypes.STRING,
        type: DataTypes.STRING,
        value: DataTypes.DECIMAL,
        date_purchased: DataTypes.DATEONLY,
        purchase_price: DataTypes.DECIMAL,
        serial_number: DataTypes.STRING,
        image: DataTypes.STRING,
        notes: DataTypes.TEXT
    });
    return User;
}