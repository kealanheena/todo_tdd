const express = require('express');
const todoRoutes = require("./routes/todo.routes");
const app = express();
const mongodb = require("./mongodb/mongodb.connect");

mongodb.connect();

app.use(express.json());

app.use("/todos", todoRoutes);

app.get('/', (rq, res) => {
  res.json("hello")
})

module.exports = app;
