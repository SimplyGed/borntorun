const Event = require('./event.model');

require('../database/mongo').connect();

function getEvents(req, res) {
    const query = Event.find({});
    query
        .exec()
        .then(events => {
            res.status(200).json(events);
        })
        .catch(error => {
            res.status(500).send(error);
            return;
        });
}

function getEvent(req, res) {
    const id = parseInt(req.params.id, 10);
    Event.findOne({id: id}, (error, event) => {
        if(checkServerError(res, error)) return;
        if(!checkFound(res, event)) return;

        res.status(200).json(event);
    });
}

function postEvent(req, res) {
    const originalEvent = { 
        id: req.body.id, 
        name: req.body.name,
        date: req.body.date,
        location: req.body.location
    };

    const event = new Event(originalEvent);

    event.save(error => {
        if(checkServerError(res, error)) return;
        res.status(201).json(event);
        console.log(`Successfully created event ${event.id} : ${event.name}`);
    });
}

function putEvent(req, res) {
    const id = parseInt(req.params.id, 10);
    const updatedEvent = {
        id: id,
        name: req.body.name,
        date: req.body.date,
        location: req.body.location
    };
    Event.findOne({id: id}, (error, event) => {
        if(checkServerError(res, error)) return;
        if(!checkFound(res, event)) return;

        event.name = updatedEvent.name;
        event.date = updatedEvent.date;
        event.location = updatedEvent.location;
        event.save(error => {
            if(checkServerError(res, error)) return;
            res.status(200).json(event);
            console.log(`Successfully update event ${event.id} : ${event.name}`);
        });
    });
}

function deleteEvent(req, res) {
    const id = parseInt(req.params.id, 10);
    Event.findOneAndRemove({id: id})
    .then(event => {
        if(!checkFound(res, event)) return;
        res.status(200).json(event);
        console.log(`Deleted event ${event.id} : ${event.name}`);
    })
    .catch(error => {
        if(checkServerError(res, error)) return;
    });
}

function checkFound(res, event) {
    if(!event) {
        res.status(404).send('Event not found');
        return;
    }

    return event;
}

function checkServerError(res, error) {
    if(error) {
        res.status(500).send(error);
        return error;
    }
}

module.exports = {
    getEvents,
    getEvent,
    postEvent,
    putEvent,
    deleteEvent
};
