//import mongoose
const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    //eventType[eventName, created_date, subscribe]
    //topicName
    eventName: {
        type: String,
        required: 'Event name is required'
    },
    subscribe: {
        type: Boolean,
        default: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})
var EventType = mongoose.model('EventType', eventSchema);
module.exports = EventType;
