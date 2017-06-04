
var db = require("./models");




//sequelize sync
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on port: " + PORT);
    });
});