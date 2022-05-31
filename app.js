const express = require('express');
const friendRouter = require('./routes/friendRoutes')
const cors = require('cors');

const app = express();
app.use('*',cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello from server");
  })
app.use('/api/v1/friends',friendRouter)

module.exports = app;