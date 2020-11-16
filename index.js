var express = require('express');
const app = express();
//var eventRoutes = require('./routes/eventRouter');

app.use(express.json());


//app.use('/', eventRoutes);

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//create event variables

let events = [
  {
    "id": 1,
    "event": "Business new",
    "topic": "Economy",
    "subscription": true,
    "message": "Hello"
  }, 
];


/* app.get('/', (request, response) => {
  response.send('Hello');
}); */

app.post('/subscribe', function(request, response){
  response.redirect('/event')
  .then(function(events){
   response.status(201).json(events);
  })
  .catch(function(err){
    response.send(err);
  });
});


app.post('/publish', function(request, response){
  const incomingSubscription = Request.body;
  event.push(incomingSubscription);
  response.json(events);
});


app.get('/event/:id', (request, response) => {
  const eventId = Number(request.params.id);
  const getMessage = events.find((events) => events.id === eventId);

  if (!getMessage) {
    response.status(500).send('Event not found.')
  } else {
    message = getMessage.message;
    response.json({message: message});
  }
});
 
app.get('/event', (request, response) => {
 response.json(events);
});

//create node js server
let port = process.env.PORT;
if(port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port " + port);
});