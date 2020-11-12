//requiring express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var eventRoutes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//create home route
app.get('/', function(req, res) {
    res.send("Hello from home route");
});

app.use('/', eventRoutes);


//create node js server
let port = process.env.PORT;
if(port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port " + port);
});