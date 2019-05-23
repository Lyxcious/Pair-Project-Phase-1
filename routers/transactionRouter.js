let express = require('express')
let router = express.Router()
let TransactionController = require("../controllers/transactionController")

router.get("/:username",(req, res, next) => {
  if (req.session.cart){
    next()
  } else {
    res.locals.error = new Error("Your cart is empty")
    res.locals.user = {
      username: req.session.user.username
    }
    res.render("pages/home.ejs")
  }
}, TransactionController.cart)
router.post("/:username", TransactionController.purchase)

module.exports = router