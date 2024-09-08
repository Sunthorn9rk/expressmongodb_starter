const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/DBproducts");
    console.log("DB Connected");
  } catch (err) {
    // Error
    console.log(err);
  }
};

module.exports = connectDB;
