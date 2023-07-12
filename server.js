const express = require('express')
const app = express()
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const PORT = 8080
const oneDay = 1000 * 60 * 60 * 24 //1 day in ms

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('./views'))
app.use(sessions({ //config sessions
    secret: "123123",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: true
}))

const homeRouter = require('./routes/home') 
const loginRouter = require('./routes/login')

app.use('/', homeRouter)
app.use('/login', loginRouter)

app.listen(PORT, console.log(`Listening on port: ${PORT}`))