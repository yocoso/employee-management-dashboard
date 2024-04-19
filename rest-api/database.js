const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongodb:27017";
const connectionString = `${MONGODB_URI}/employeeDB`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = mongoose;
