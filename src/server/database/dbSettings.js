const host = 'localhost';
const port = 27017;
const databaseName = 'borntorun';

const connectionString = `mongodb://${host}:${port}/${databaseName}`;

module.exports = {
    connectionString
};