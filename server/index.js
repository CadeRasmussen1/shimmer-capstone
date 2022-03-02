require('dotenv').config();
const session = require('express-session')
const authCtrl = require('./userAuth')
const express = require('express')
const cors = require('cors')
const app = express()
const massive = require('massive');

app.use(cors())
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 60 * 7},
    secret: SESSION_SECRET
}))


app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.signIn)
app.delete('/auth/logout', authCtrl.logout)

const ctrl = require('./controller.js')

app.get('/api/songs', ctrl.getSongs)
app.post('/api/songs', ctrl.createSong)
app.put('/api/songs/:id', ctrl.updateSong)
app.delete('/api/songs/:id', ctrl.deleteSong)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    console.log("Database is connected")
    app.listen(SERVER_PORT, () => console.log(`Server is Listening on ${SERVER_PORT}!`))
}).catch(error => console.log(error,"could not connect to server"))