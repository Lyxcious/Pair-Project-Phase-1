const {Item, User, Transaction, TransactionItem} = require("../models")

class TransactionController {
  static cart (req, res){
    if(req.session){
      res.locals.user = req.session.user
    }
    res.render("pages/transaction/cart.ejs", {
      items: req.session.cart
    })
  }

  static purchase (req, res) {
    User.findOne({where: {username: req.params.username}})
    .then(user => {
      if (req.session.cart.length != 0){
        return Transaction.create({
          timestamp: new Date(),
          UserId: user.id 
        })
      } else {
        throw new Error("No item bought")
      }
    })
    .then(transaction => {
      let promises = []
      for(let i = 0; i < req.session.cart.length; i++){
        let data = {
          TransactionId: transaction.id,
          ItemId: req.session.cart[i].id,
          quantity: Object.values(req.body)[i]
        }
        promises.push(TransactionItem.create(data))
      }
      return Promise.all(promises)
    })
    .then(() => {
      req.session.cart = []
      res.redirect(`/item/${req.params.username}`)
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/item/list.ejs")
    })
  }
}

module.exports = TransactionController