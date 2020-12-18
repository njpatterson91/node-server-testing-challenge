const express = require("express");
const server = express();
const employeesRouter = require("./employees/employees-router");

server.use(express.json());

server.use("/api/employees", employeesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is active" });
});

module.exports = server;
