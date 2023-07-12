const express = require('express')
const router = express.Router()
const fs = require('fs')
const oneDay = 1000 * 60 * 60 * 24
const db = require('../db.json')

function getUser(uid) { //KRAZY function
    for (let i = 0; i < db.length; i++) {
        if (db[i]['username'] === uid) {
            return i //searches for user and returns db key
        }
    }
}

router.get("/", (req, res, next) => {
    let session = req.session
    if (session.userid) {
        userKey = getUser(session.userid)
        res.render('home.ejs', { 
            logInCount: db[userKey]['signInCount'],
            clientUser: db[userKey]['username']
        })
    } else {
        res.redirect('/login')
    }
        
})

router.get('/logout', (req, res) => {
    req.session.destroy
    res.redirect('/login')
})

module.exports = router;