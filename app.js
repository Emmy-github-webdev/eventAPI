//requiring express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//create home route
app.get('/', function(req, res) {
    res.send("Home route");
});


//create node js server
let port = process.env.PORT;
if(port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port " + port);
});