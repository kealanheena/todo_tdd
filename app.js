const express = require('express');
const todoRoutes = require("./routes/todo.routes");
const app = express();
const mongodb = require("./mongodb/mongodb.connect");
const PORT = 3000;

mongodb.connect();

app.use(express.json());

app.use("/todos", todoRoutes);

app.get('/', (rq, res) => {
  res.json("hello")
})

// app.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`)
// })

module.exports = app;
