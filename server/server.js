const axios = require('axios')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const pgp = require('pg-promise')();
const secret = require('./secrets')

const app = express()
const DATABASE_URL = secret.databaseSecret
const db = pgp(DATABASE_URL);
const port = process.env.PORT || 5000
const saltRounds = 10;

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

    db.one('Select username, email FROM users WHERE username = $1 OR email = $2', [username, email]).then(response =>{
        if (response) {
            res.json({isAuthenticated: false, errorMessage: 'username/email already exists'})
        }
    }).catch(e => {
        if (e.code === 0) {

            bcrypt.hash(password, saltRounds).then(hash => {

                db.any(`INSERT INTO users (username, email, firstname, lastname, company, position, password) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [username, email, firstName, lastName, company, position, hash]).then(response => {

                    res.json({isAuthenticated: true, response: response.data})
                }).catch(e => console.log(e))
            })
        } else {
            let errorMessage = `We're Sorry! We are having some minor difficulties. Please wait a few minutes and then try again.`
                
            res.json({isAuthenticated: false, errorMessage: errorMessage})
            console.log('alt error')
        }
    })
})

app.post('/login', (req, res) => {
    let usernameOrEmail = req.body.usernameOrEmail
    let password = req.body.password

    db.one(`SELECT username, email, password FROM users WHERE (username = $1 OR email = $1) AND password = $2`, [usernameOrEmail, password]).then(response => {
        res.json({isAuthenticated:true, user: response.data})

    }).catch(e => {
        if (e.code === 0) {
            console.log('authentication denied', e)

            let errorMessage = `this username/email does not exist or the connected password is incorrect`
            res.json({isAuthenticated: false, errorMessage: errorMessage})
        } else {
            console.log(e)

            let errorMessage = `We're Sorry! We are having some minor difficulties. Please wait a few minutes and then try again.`
            res.json({errorMessage: errorMessage})
        }
    }).catch(e => console.log('alt error', e))
})

app.post('/timeStamp', (req, res) => {
    let usernameOrEmail = req.body.usernameOrEmail

    db.one('SELECT id, username, email FROM users WHERE username = $1 OR email = $1', [usernameOrEmail]).then(response => {
        console.log(response)
        let username = response.username
        let email = response.email
        let date = new Date()
        let timestamp = new Date()

        db.any('INSERT INTO timestamps (username, email, date, timestamp) VALUES ($1, $2, $3, $4)', [username, email, date, timestamp])
    })
})





app.post('/altstory', (req, res) => {
    let title = req.body.title

    db.one('SELECT * FROM stories WHERE title = $1', [title]).then(response => {

        res.json({altStory: response})
    }).catch(e => console.log(e))
})

app.post('/tickers', (req, res) => {

    let username = req.body.username
    db.one(`SELECT tickers FROM users WHERE username = $1`, [username]).then(response => {
        console.log(response.tickers)
        let tickers = response.tickers
        res.json({tickers: tickers})
            }).catch(e => {
                if (e.name === "QueryResultError") {
                    console.log('authentication denied')
        
                    let error = `this username/email does not exist or connected password is incorrect`
                    res.json({isAuthenticated: false, error: error})
                } else {
                    console.log('alt error', e)
        
                    let error = `We're Sorry! We are having some minor difficulties. Please wait a few minutes and then try again.`
                    res.json({error:error})
                }
            }) 
})
// axios.get(`https://www.tphco.com/category/latest-news/`).then(response => {
//     let smart = JSON.parse(response.data)
//     console.log(smart)
// }).catch(e => console.log(e))









const makeitup = () => {

    db.one(`SELECT tickers FROM users WHERE username = $1`, ['g']).then(response => {
console.log(response.tickers)
    }).catch(e => {
        if (e.name === "QueryResultError") {
            console.log('authentication denied')

            let error = `this username/email does not exist or connected password is incorrect`
            res.json({isAuthenticated: false, error: error})
        } else {
            console.log('alt error', e)

            let error = `We're Sorry! We are having some minor difficulties. Please wait a few minutes and then try again.`
            res.json({error:error})
        }
    })
}

app.listen(port, () => console.log('server up'))