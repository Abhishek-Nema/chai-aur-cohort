// impoting express to use Router functionality
import express from "express"

// importing controller 
import { defaultUserRoute, loginUser, registerUser } from "../controller/user.controller.js"

// saari skatiyan router ke paas
const router = express.Router()

// route to "register"
router.get("/register", registerUser)

// route to "login"
router.get("/login", loginUser)

// route to "/"
router.get("/", defaultUserRoute)

export default router