// getData.js
const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../db/db');
// import { sign } from "jsonwebtoken";
const {sign}  = require('jsonwebtoken');
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ success: false, message: 'Email and password are required' });
    }

    try {
        const db = await connectToDatabase();
        const collection = db.collection('user_data');
        
        // Assuming 'email' and 'password' fields exist in your collection
        const user = await collection.findOne({email, password });

        const jwtSecret = "asokcvokvokaoca";
    if (!jwtSecret) {
      throw new Error("JWT_SECRET environment variable is not defined");
    }

    const token = sign({ userId: user.id }, jwtSecret, {
      expiresIn: "7d",
    }); 

        if (!user) {
            return res.status(404).send({ success: false, message: 'No User Found!' });
        }
        
      return  res.status(200).json({ success: true, message: 'Login successful', data: { token }, user: { id: user.id, email: user.email, name:user.name },});
        
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
