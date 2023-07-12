const express = require('express')
const router = express.Router()
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const db = require('../db.json')

router.get('/', (req,res) => {
    res.render('login.ejs')
})

router.post('/', (req,res) => { 
    for (var i = 0; i < db.length; i++) {
        if (db[i]['username'] == req.body.username) {
            var dataKey = i
            var userExists = true
        }
    }

    if (!userExists) {
        res.redirect('/login')
    }

    if (db[dataKey]['password'] === req.body.password) {
        session=req.session
        session.userid=db[dataKey]['username']
        console.log(session)
        res.redirect('/')
    }

})

module.exports = router