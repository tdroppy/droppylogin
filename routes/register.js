const express = require('express')
const router = express.Router()
const fs = require('fs')
const db = require('../db.json')

function getUserExist(uid) { //iterates through db.json, just returns the key to user
    for (let i = 0; i < db.length; i++) {
        if (db[i]['username'] === uid) {
            return i
        }
    }
    return -1
}

router.get('/', (req, res) => {
    res.render('register.ejs')
})

router.post('/', (req, res) => {
    userName = req.body.username
    passWord = req.body.password
    
    if (getUserExist(userName) > 0) { //TODO: fix this mess :)
        console.log('username already taken')
        res.redirect('/register')
    } else {
        db.push({
            "username": userName,   
            "password": passWord,
            "signInCount": 0
        })
        fs.writeFile("./db.json", JSON.stringify(db, null, 2), (error) => {
            if (error) {
                console.log(error)
                throw error
            }
        })
        console.log(`User: ${userName} created`)
        res.redirect('/login')
    }
})

module.exports = router