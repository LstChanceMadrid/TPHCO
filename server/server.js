const express = require('express')

const pgp = require('pg-promise')();
const bodyParser = require('body-parser')
const cors = require('cors')
const secret = require('./secrets')

const app = express()
const port = process.env.PORT || 5000
const DATABASE_URL = secret.databaseSecret
const db = pgp(DATABASE_URL);


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => res.send('Hello World!'))
 
app.post('/register', (req, res) => {

    let username = req.body.username
    let email = req.body.email
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let company = req.body.company
    let position = req.body.position
    let password = req.body.password


    db.none(`INSERT INTO users (username, email, firstname, lastname, company, position, password) VALUES (${username}, ${email}, ${firstName}, ${lastName}, ${company}, ${position}, ${password})`)
})

app.post('/login', (req, res) => {
    // let emailOrUsername = JSON.stringify(req.body.emailOrUsername)
    // console.log(emailOrUsername)
    let usernameOrEmail = req.body.usernameOrEmail
    let password = req.body.password
    console.log(req.body.emailOrUsername)

    db.one(`SELECT username, email, password FROM users WHERE (username = $1 OR email = $1) AND password = $2`, [usernameOrEmail, password]).then(response => {

        res.json({isAuthenticated:true, user: response.data})
    }).catch(e => {
        if (e.name === "QueryResultError") {
            console.log('authentication denied')
            console.log(e)

            let error = `this username/email does not exist or connected password is incorrect`
            res.json({isAuthenticated: false, error: error})
        } else {
            console.log(e)

            let error = `We're Sorry! We are having some minor difficulties. Please wait a few minutes and then try again.`
            res.json({error:error})
        }
    })
})











const makeitup = () => {

    let emailOrUsername = "testusername"
    let password = "testpassword"

    db.one(`SELECT username, email, password FROM users WHERE (username = $1 OR email = $1) AND password = $2`, [emailOrUsername, password]).then(response => {
        console.log(response)

    }).catch(e => {
        if (e.name === "QueryResultError") {
            console.log('authentication denied')

            let error = `this username/email does not exist or connected password is incorrect`
            res.json({isAuthenticated: false, error: error})
        } else {
            console.log(e)

            let error = `We're Sorry! We are having some minor difficulties. Please wait a few minutes and then try again.`
            res.json({error:error})
        }
    })
}


app.listen(port, () => console.log('server up'))