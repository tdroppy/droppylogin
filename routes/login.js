const express = require('express')
const router = express.Router()
const fs = require('fs')
const db = require('../db.json')

function getUser(uid) { //iterates through db.json, just returns the key to user
    for (let i = 0; i < db.length; i++) {
        if (db[i]['username'] === uid) {
            return i
        }
    }
}

router.get('/', (req,res) => {
    res.render('login.ejs')
})

router.post('/', (req,res) => { 
    for (var i = 0; i < db.length; i++) { //made this before getUser, too lazy to remake currently
        if (db[i]['username'] == req.body.username) {
            var dataKey = i
            var userExists = true
        }
    }

    if (!userExists) {
        res.redirect('/login')
    }

    if (db[dataKey]['password'] === req.body.password) {
        session=req.session //yeah
        session.userid=db[dataKey]['username']
        console.log(session)

        db[getUser(session.userid)]['signInCount'] += 1 //adds one to count and then writes it to db, unfortunately rewrites the entire db
        fs.writeFile("./db.json", JSON.stringify(db, null, 2), (error) => {
            if (error) {
                console.log(error)
                throw error
            }
        })

        res.redirect('/') //redirects to home.js
    }

})

module.exports = router