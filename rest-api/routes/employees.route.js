const express = require("express");
const router = express.Router();
const Employee = require("../models/employees.model");

router.get("/", async (req, res) => {
    try {
        const query = {};
        if (req.query.department) {
            query.department = req.query.department;
        }
        if (req.query.status) {
            query.status = req.query.status;
        }
        const employees = await Employee.find(query);
        res.json(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/", async (req, res) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const employee = await Employee.findOneAndUpdate(
            { employeeId: req.params.id },
            req.body,
            { new: true }
        );
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const employee = await Employee.findOneAndDelete({
            employeeId: req.params.id,
        });
        if (!employee) {
            return res.status(404).send();
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
