const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const todoRoutes = require('./routes/todo');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(todoRoutes);
app.use(helmet());
app.use(compression());

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-po0x5.mongodb.net/bi_backend?retryWrites=true&w=majority`;

const port = process.env.PORT || 7000;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server starting at ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
