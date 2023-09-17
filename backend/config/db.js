const mongoose = require("mongoose");
const colors = require("colors");
//const dotenv = require("dotenv");
const MONGO_URI =
  "mongodb+srv://harshitavyas23:Icecream1234@cluster0.th4zntl.mongodb.net/?retryWrites=true&w=majority";
//dotenv.config();
const PORT = process.env.PORT;
const connectDB = async () => {
  console.log(MONGO_URI);
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
