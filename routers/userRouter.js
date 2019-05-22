let express = require('express')
let router = express.Router()
let UserController = require("../controllers/userController")

router.get("/register", UserController.register)
router.post("/register", UserController.create)
router.get("/login", UserController.login)
router.post("/login", UserController.loggedIn)
// router.get("/logout", auth , UserController)

module.exports = router