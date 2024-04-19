const mongoose = require("../database"); // Adjust the path to where your database.js file is located

const { Schema } = mongoose;

const CounterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 },
});
const counter = mongoose.model("counter", CounterSchema);

const employeeSchema = new mongoose.Schema({
    employeeId: { type: Number, default: 1 },
    name: { type: String, required: true },
    department: String,
    position: String,
    salary: Number,
    bio: String,
    status: String,
});

employeeSchema.pre("save", function (next) {
    let doc = this;
    counter
        .findByIdAndUpdate(
            { _id: "entityId" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        )
        .then(function (count) {
            console.log("...count: ", count);
            doc.employeeId = count.seq;
            next();
        })
        .catch(function (error) {
            console.error("counter error-> : ", error);
            throw error;
        });
});

const Employee = mongoose.model("Employees", employeeSchema);

module.exports = Employee;
