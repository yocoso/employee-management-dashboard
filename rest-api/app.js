const express = require("express");
const cors = require("cors");
const employeeRoute = require("./routes/employees.route");
const chatRoute = require("./routes/chat.route");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const allowedOrigins = ["http://localhost:3033"];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        credentials: true,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
);

app.use("/employees", employeeRoute);
app.use("/chat", chatRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
