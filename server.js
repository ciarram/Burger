var express = require('express');
var bodyParser = require('body-parser');
var express_handlebars = require('express-handlebars');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 require("./routes/apiRoutes")(app);
 require("./routes/htmlRoutes")(app);


app.listen(PORT, function(){
    console.log("I'm listening at http://localhost:" + PORT);
});
