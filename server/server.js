const express = require('express')
const app = express()
const pgp = require('pg-promise')();
const db = pgp("connection");
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 5000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => res.send('Hello World!'))
 
app.listen(port, () => console.log('server up'))