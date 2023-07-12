const express = require('express')
const router = express.Router()
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const oneDay = 1000 * 60 * 60 * 24

router.get("/", (req, res) => {
    let session = req.session
    if (session.userid) { //checks browser for userId, if none redirects to login page
        res.render('home.ejs')
    } else {
        res.redirect('/login')
    }
})

module.exports = router;