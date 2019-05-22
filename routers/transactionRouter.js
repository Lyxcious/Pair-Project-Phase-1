let express = require('express')
let router = express.Router()
let TransactionController = require("../controllers/transactionController")

router.get("/:username", TransactionController.cart)
router.post("/:username", TransactionController.purchase)

module.exports = router