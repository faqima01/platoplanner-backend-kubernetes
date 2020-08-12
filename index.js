const { createClient } = require('@typeform/api-client');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

const typeformAPI = createClient({
  token: process.env.TYPEFORM_TOKEN,
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@platoplannercluster.cnf3e.mongodb.net/platoplanner?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
  },
});

const UserModel = mongoose.model('User', UserSchema);

app.get('/', async (req, res) => {
  res.send('Hello from Plato Planner Backend!');
});

app.get('/getusers', async (req, res) => {
  const users = await UserModel.find({});
  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/adduser', async (req, res) => {
  const user = new UserModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/getresponses/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const responses = await typeformAPI.responses.list({
      uid: process.env.TYPEFORM_FORM_ID,
      query: username,
    });
    res.send(responses);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running...');
});
