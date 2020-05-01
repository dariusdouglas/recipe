const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

const recipeRoutes = require('./routes/Recipe');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', recipeRoutes);

const db = config.get('mongoURI');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = 5000;
app.listen(port, () => console.log(`Server started on port: http://localhost:${port}`));
