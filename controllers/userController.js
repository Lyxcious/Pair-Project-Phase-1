const {User, Transaction, TransactionItem, Item} = require("../models")
const bcrypt = require("bcryptjs")
const convertDate = require("../helpers/convertDate")

class UserController {
  static register (req, res) {
    res.render("pages/user/register.ejs")
  }

  static create (req, res) {
    User.findOne({where: {username: req.body.username}})
    .then(user => {
      if(user) {
        let err = "Username already exist. Please change your username"
        throw new Error(err)
      } else {
        let data = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        }
        return User.create(data)
      }
    })
    .then(() => {
      res.redirect("/")
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/user/register.ejs")
    })
  }

  static login (req, res) {
    res.render("pages/user/login.ejs")
  }

  static loggedIn (req, res) {
    let userLogin
    User.findOne({where: {username: req.body.username}})
    .then(user => {
      if (user){
        userLogin = user
        return bcrypt.compare(req.body.password, user.password)
      } else {
        throw new Error (`User with username ${req.body.username} not found`)
      }
    })
    .then(output => {
      if(output) {
        req.session.user = {
          id : userLogin.id,
          username: userLogin.username
        }
        res.redirect("/")
      } else {
        throw new Error ("Password mismatch")
      }
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/user/login.ejs")
    })
  }

  static logout (req, res) {
    req.session.destroy(err => {
      if(err){
        res.locals.error = err
        return res.render("pages/home.ejs")
      } else {
        return res.render("pages/home.ejs")
      }
    })
  }

  static profile (req, res) {
    User.findOne({where: {username: req.params.username}})
    .then(user => {
      let data = {
        username: user.username,
        email: user.email
      }
      res.render("pages/user/profile.ejs", {
        user: data
      })
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/home.ejs")
    })
  }

  static profileEdit (req, res){
    User.findOne({where: {username: req.params.username}})
    .then(user => {
      let data = {
        username: user.username,
        password: user.password,
        email: user.email
      }
      res.render("pages/user/edit.ejs", {
        user: data
      })
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/home.ejs")
    })
  }

  static profileUpdate (req, res) {
    let data
    User.findOne({where: {username: req.params.username}})
    .then(user => {
      user.username = req.body.username
      user.email = req.body.email
      if (req.body.password !== "set new password"){
        user.password = req.body.password
      } else {
        User.removeHook("beforeSave", "encryptPassword")
      }
      data = user
      return user.save()
    })
    .then(() => {
      res.redirect(`/user/${data.username}/profile`)
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/home.ejs")
    })
  }

  static profileDelete(req, res){
    User.destroy({where: {username: req.params.username}})
    .then(() => {
      req.session.destroy(err => {
        if(err){
          res.locals.error = err
          return res.render("pages/home.ejs")
        } else {
          return res.render("pages/home.ejs")
        }
      })
    })
    .catch(err => {
      res.locals.error = err
      res.render("pages/home.ejs")
    })
  }

  static transactionHistory (req, res){
    User.findOne({where: {username: req.params.username}})
    .then(user => {
      return Transaction.findAll({
        attributes: ["timestamp"],
        include: [{
          model: Item,
          attributes: ["price"],
          through: {
            attributes: ["quantity"]
          }
        }],
        where: {UserId: user.id},
        raw: true
      })
    })
    .then(transactions => {
      transactions.forEach(transaction => {
        transaction.timestamp = convertDate(transaction.timestamp)
      })
      let time = []
      for(let i = 0; i < transactions.length; i++){
        if (i === 0){
          time.push(transactions[i].timestamp)
        } else {
          let found = false
          for (let j = 0; j < time.length; j++){
            if (transactions[i].timestamp === time[j]){
              found = true
            }
          }
          if (!found){
            time.push(transactions[i].timestamp)
          }
        }
      }
      let total = []
      for(let i = 0; i < transactions.length; i++){
        for (let j = 0; j < time.length; j++){
          if (transactions[i].timestamp === time[j]){
            if (!total[j] && total[j] != 0){
              total[j] = 0
            } 
            total[j] += transactions[i]['Items.price'] * transactions[i]['Items.TransactionItem.quantity']
          }
        }
      }
      res.render("pages/user/purchaseHistory.ejs", {
        data: total,
        labels: time
      })
    })
    .catch(err => {
      res.locals.error = err
      res.redirect("/")
    })
  }
}

module.exports = UserController