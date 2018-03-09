const express = require('express');
const routes = express.Router();

routes.get('/events', (req, res) => {
    res.status(200).send([
        { "id": 3, "name": "New York Marathon", "date": new Date("2017/11/05") }
    ]);
});

routes.get('/results', (req, res) => {
    res.status(200).send([
        { "id": 7, "name": "Chester Half Marathon", "date": new Date("2017/05/14"), "finishTime": { "hours": 2, "minutes": 04, "seconds": 37 } }
    ])
});

module.exports = routes;
