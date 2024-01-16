const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

dotenv.config({ path: './env' });
require('./db/conn');
Connection();

const app = express();
app.use(express.json());

// Use cors middleware to allow cross-origin requests
app.use(cors());

const User = require('./model/userAppointment');

app.post('/usernew', async (req, res) => {
  const { name, email, contact, gender } = req.body;
  try {
    const newUser = new User({ name,  email, contact, gender});
    await newUser.save();
    res.status(201).json({ message: "sent", newUser });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/usernew', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use('/', (req, res) => {
  res.json({ message: "chla" });
});

const port = 8080;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
