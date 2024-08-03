const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db/db');

router.post('/', async (req, res) => {
    try {
        const {email, password } = req.body; // Extract email and password from request body
        
        const db = await connectToDatabase();
        const collection = db.collection('user_data');
        
        // Check if the email already exists (case-insensitive)
        const existingUser = await collection.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User with this email already exists' });
        }
        if(password === null  || email === null)
            {
                return res.status(400).json({ success: false, message: 'Email or Password cannot be empty' });
            }
            else
            {
                // If the email does not exist, insert the user into the database
                const insertResult = await collection.insertOne({ email, password });
                res.status(200).json({ success: true, message: 'Data added successfully', result: insertResult });   
            }
       
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
