const express = require('express');
const app = express();
const PORT = 3000

app.get('/', (rq, res) => {
  res.json("hello")
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
