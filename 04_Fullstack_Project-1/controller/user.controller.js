// controller for "register" route
const registerUser = async (req, res) => {
    res.send("User registered")
}

// controller for "login" route
const loginUser = async (req, res) => {
    res.send("User login")
}

// controller for "/" route
const defaultUserRoute = async (req, res) => {
    res.send("this is default route for user")
}

export { registerUser, loginUser, defaultUserRoute }