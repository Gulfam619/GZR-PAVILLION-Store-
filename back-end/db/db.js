// db.js
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'NextStore';

async function connectToDatabase() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log('Connected successfully to server');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to database:', error);
        throw error;
    }
}

module.exports = { connectToDatabase };
