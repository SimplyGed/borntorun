const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const env = require('./dbSettings');

function connect() {
    return mongoose.connect(env.connectionString);
}

module.exports = {
    connect,
    mongoose
};
