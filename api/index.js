const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/learning-plans", (req, res) => {
    fs.readFile("data/learning-plans.json", "utf-8")
        .then((data) => res.json(JSON.parse(data)))
        .catch((err) => res.status(500).json({ error: "Error reading learning plans" }));
});

app.get("/learning-plan/:id.json", (req, res) => {
    const id = req.params.id;
    fs.readFile(`data/${id}.json`, "utf-8")
        .then((data) => res.json(JSON.parse(data)))
        .catch((err) => res.status(404).json({ error: "Learning plan not found" }));
});

app.listen(3000, () => console.log("API Server is running..."));