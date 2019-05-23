let auth = (req, res, next) => {
	if(req.session.user === "admin") {
		next()
	} else {
    res.locals.error = new Error ("You are not admins! You don't have acces for this!")
    res.render("pages/home.ejs")
	}
}

module.exports = auth