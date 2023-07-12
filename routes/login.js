const express = require('express')
const router = express.Router()
const sessions = require('express-session')
const cookieParser = require('cookie-parser')

const NAME = 'dog' //only storing these on here temporary use (ik this is a BAD idea)
const PASS = 'dog2'

router.get('/', (req,res) => {
    res.render('login.ejs')
})

router.post('/', (req,res) => { 
    if (req.body.username == NAME && req.body.password == PASS) { 
        session=req.session //pulls/creates cookie from browser????
        session.userid=req.body.username //sets userid to provided name
        console.log(session)
        res.redirect('/') 
    }
})

module.exports = router