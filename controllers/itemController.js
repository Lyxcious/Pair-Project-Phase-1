const {Item, User} = require("../models")

class ItemController {
  static list (req, res) {
    Item.findAll()
    .then(items => {
      items.sort((a,b) => a.id - b.id)
      res.locals.user = null
      res.render("pages/item/list.ejs", {
        items: items
      })
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/item/list.ejs")
    })
  }

  static listUser (req, res) {
    let itemList
    Item.findAll()
    .then(items => {
      items.sort((a,b) => a.id - b.id)
      itemList = items
      return User.findOne ({where: {username: req.params.username}})
    })
    .then(user => {
      res.locals.user = user
      res.render("pages/item/list.ejs", {
        items: itemList
      })
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/item/list.ejs")
    })
  }

  static add (req, res) {
    res.locals.user = {
      username: "admin"
    }
    res.render("pages/item/add.ejs")
  }

  static create (req, res) {
    let data = {
      itemName: req.body.itemName,
      itemDesc: req.body.itemDesc,
      price: req.body.price
    }
    Item.create(data)
    .then(() => {
      res.redirect("/item/admin")
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/item/list.ejs")
    })
  }

  static cart (req, res){
    let itemList
    Item.findOne({where: {id: req.params.id}})
    .then(item => {
      if (!req.session.cart){
        req.session.cart =[]
      }
      let found = false
      for (let i = 0; i < req.session.cart.length; i++){
        if (req.session.cart[i].id === item.id){
          found = true
        }
      }
      if (!found){
        req.session.cart.push (item)
      }
      return Item.findAll()
    })
    .then(items => {
      items.sort((a,b) => a.id - b.id)
      itemList = items
      return User.findOne ({where: {username: req.params.username}})
    })
    .then(user => {
      res.locals.user = user
      res.render("pages/item/list.ejs", {
        items: itemList
      })
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/item/list.ejs")
    })
  }

  static edit (req, res){
    Item.findOne({where: {id: req.params.id}})
    .then(item => {
      res.locals.user = {
        username: "admin"
      }
      res.render("pages/item/edit.ejs", {
        item: item
      })
    })
    .catch(err => {
      res.locals.error = err
      res.redirect("/item/admin")
    })
  }

  static update (req, res){
    Item.findOne({where: {id: req.params.id}})
    .then(item => {
      item.itemName = req.body.itemName
      item.itemDesc = req.body.itemDesc
      item.price = req.body.price
      return item.save()
    })
    .then(() => {
      res.redirect("/item/admin")
    })
    .catch(err => {
      res.locals.error = err
      res.redirect("/item/admin")
    })
  }

  static delete (req, res){
    Item.destroy({where: {id: req.params.id}})
    .then(() => {
      res.redirect("/item/admin")
    })
    .catch(err => {
      res.locals.error = err
      res.redirect("/item/admin")
    })
  }
}

module.exports = ItemController