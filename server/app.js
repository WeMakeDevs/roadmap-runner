const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello world!' });
});

exports.app = app

