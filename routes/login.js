const express = require('express')
const router = express.Router()
const fs = require('fs')
const db = require('../db.json')

function getUser(uid, res) { //iterates through db.json, just returns the key to user
    for (let i = 0; i < db.length; i++) {
        if (db[i]['username'] === uid) {
            return i
        }
    }
    return res.redirect('/login') // if no user is found under UID, refresh
}

router.get('/', (req,res) => {
    res.render('login.ejs')
})

router.post('/', (req,res) => { 
    dataKey = getUser(req.body.username, res)
    
    try {
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
    } catch {
        console.log('User not found.')
    }

})

module.exports = router