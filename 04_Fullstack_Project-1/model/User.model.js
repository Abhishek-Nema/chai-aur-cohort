// creating structure for User

import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    verificationToken: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    userCreated: {
        type: Date
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User