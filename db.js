const mongoose = require("mongoose");

const connectDB = async () => {
    db_url = process.env.MONGO_URI || "mongodb://localhost:27017/URL";
    const conn = await mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
