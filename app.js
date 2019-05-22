const express = require('express')
const app = express()
const port = 3000 //port number
const user = require("./routers/userRouter")
const session = require('express-session')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.use("/user", user)
app.get("/", (req, res) => {
  res.render("pages/home.ejs")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))