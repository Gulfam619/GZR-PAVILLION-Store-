// deleteData.js
const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db/db');

router.delete('/', async (req, res) => {
    try {
        const data = req.body
        const db = await connectToDatabase();
        const collection = db.collection('user_data');
        const findResult = await collection.deleteOne(data);
        res.send({success: true, result: findResult});
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
