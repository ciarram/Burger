var path = require("path");

module.exports = function(app){
    // app.get("/", function(req, res){
    //     res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
    // });
    app.get('*', function (req, res) {
        res.render('index');
    });
};