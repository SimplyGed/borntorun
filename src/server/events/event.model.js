const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true },
        date: { type: Date, required: true },
        location:{ type: String, required: true }
    },
    {
        collection: 'events',
        read: 'nearest'
    }
);

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
