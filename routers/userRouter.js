let express = require('express')
let router = express.Router()
let UserController = require("../controllers/userController")

router.get("/register", UserController.register)
router.post("/register", UserController.create)
router.get("/login", UserController.login)
router.post("/login", UserController.loggedIn)
router.get("/logout", UserController.logout)
router.get("/:username/profile", UserController.profile)
router.get("/:username/profile/edit", UserController.profileEdit)
router.post("/:username/profile/edit", UserController.profileUpdate)
router.get("/:username/profile/delete", UserController.profileDelete)
// router.get("/:username/transaction", UserController.transactionHistory)

module.exports = router