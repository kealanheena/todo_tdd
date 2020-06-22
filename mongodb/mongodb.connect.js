const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/todos",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch(err) {
    console.log(err);
    console.error("Error connecting to mongodb");
  }
}

module.exports = { connect };