const express = require('express');
const routes = express.Router();

const eventService = require('./events/event.service');

routes.get('/events', (req, res) => {
    eventService.getEvents(req, res);
});

routes.get('/event/:id', (req, res) => {
    eventService.getEvent(req, res);
});

routes.post('/event', (req, res) => {
    eventService.postEvent(req, res);
});

routes.put('/event/:id', (req, res) => {
    eventService.putEvent(req, res);
});

routes.delete('/event/:id', (req, res) => {
    eventService.deleteEvent(req, res);
});

routes.get('/results', (req, res) => {
    res.status(200).send([
        { "id": 7, "name": "Chester Half Marathon", "date": new Date("2017/05/14"), "finishTime": { "hours": 2, "minutes": 04, "seconds": 37 } }
    ])
});

module.exports = routes;
