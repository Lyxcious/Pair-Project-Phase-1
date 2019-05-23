const express = require('express')
const app = express()
const port = process.env.PORT || 5432; //port number
const user = require("./routers/userRouter")
const item = require("./routers/itemRouter")
const transaction = require("./routers/transactionRouter")
const session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000000000
  }
}))

app.use("/user", user)
app.use("/item", item)
app.use("/transaction", transaction)
app.get("/", (req, res) => {
  if(req.session){
    res.locals.user = req.session.user
  }
  res.render("pages/home.ejs")
})

app.listen(port, () => console.log(`Server starts on port ${port}!`))