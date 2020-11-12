//import mongoose
const mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
    //topicName
    topicName: {
        type: String,
        required: 'Event topic is required'
    },
})

var EventTopic = mongoose.model('EventTopic', topicSchema);

module.exports = EventTopic;
