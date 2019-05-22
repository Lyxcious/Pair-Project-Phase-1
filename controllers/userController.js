const {User} = require("../models")
const bcrypt = require("bcryptjs")

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
}

module.exports = UserController