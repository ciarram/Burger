var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require('express-handlebars');
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 require("./routes/apiRoutes")(app);
 require("./routes/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("I'm listening at http://localhost:" + PORT);
});
