//import mongoose
const mongoose = require('mongoose');
//setup mongose debug mode to true
mongoose.set('debug', true);
mongoose.connect('mongodb+srv://Emmanuel_1:Mycross0ver@1@cluster0.txdwq.mongodb.net/eventApi_DB', {useNewUrlParser: true, useUnifiedTopology: true });

//call promise
mongoose.Promise = Promise;

module.exports.EventTopic = require('./eventAPI');
module.exports.EventType = require('./event');