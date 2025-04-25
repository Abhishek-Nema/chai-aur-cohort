import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((err) => {
            console.log("Error while connecting");
        });
};

export default db;
