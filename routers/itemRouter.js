let express = require('express')
let router = express.Router()
let ItemController = require("../controllers/itemController")

router.get("/", ItemController.list)
router.get("/add", ItemController.add)
router.post("/add", ItemController.create)
router.get("/:id/edit", ItemController.edit)
router.post("/:id/edit", ItemController.update)
router.get("/:id/delete", ItemController.delete)
router.get("/:username", ItemController.listUser)
router.get("/:username/:id", ItemController.cart)

module.exports = router