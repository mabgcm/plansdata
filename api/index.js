const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const app = express();

app.get("/learning-plans", async (req, res) => {
    try {
        const data = await fs.readFile(path.join(process.cwd(), "data/learning-plans.json"), "utf-8");
        res.json(JSON.parse(data));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error reading learning plans" });
    }
});

app.listen(3000, () => console.log("API Server is running..."));