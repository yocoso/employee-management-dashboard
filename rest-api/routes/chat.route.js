const express = require("express");
const { openai } = require("../services/ai.service");
const Employee = require("../models/employees.model");
const router = express.Router();

router.post("/", async (req, res) => {
    const { message } = req.body;
    try {
        const employees = await Employee.find();
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content:
                        "You are an HR assistant. Answer the HR staff's question using the employees data provided below. Provide the most relevant employee info based on the question.",
                },
                {
                    role: "user",
                    content: message,
                },
                {
                    role: "system",
                    content: JSON.stringify(employees),
                },
            ],
        });

        res.json({ response: response.choices[0].message.content });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
