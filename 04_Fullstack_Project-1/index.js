// making backend using express


import express from "express";  // importing express for backend
import dotenv from "dotenv";  // importing dotenv for env variable, also for process.env
import cors from "cors";    // importing cors for safety
import db from "./utils/db.js";  //importing model - user

// importing routes
import userRoute from "./route/user.route.js"

dotenv.config();

// saari shaktiyan app ke paas
const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// using cors
app.use(
    cors({
        origin: process.env.SITE_URL,
        credentials: true,
        methods: ["GRT, POST", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

const port = process.env.PORT || 4000;

// normal routes
app.get("/", (req, res) => {
    res.send("Hey");
});

app.get("/abhi", (req, res) => {
    res.send("Hey abhi!");
});

app.get("/chai", (req, res) => {
    res.send("Chai aur cohort");
});

// starting db
db();

// User Routes
app.use("/api/v1/user", userRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
