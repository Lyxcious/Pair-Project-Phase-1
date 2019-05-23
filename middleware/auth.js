let auth = (req, res, next) => {
	if(req.session.user.username === "admin") {
		next()
	} else {
    res.locals.error = new Error ("You are not admins! You don't have acces for this!")
    res.locals.user = {
      username: req.session.user.username
    }
    res.render("pages/home.ejs")
	}
}

module.exports = auth