// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

app.use('/', api)

const port = 4200
app.post('/person', function (req, res) {
    const p = new Person(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age
        }

    )
    console.log(`${e.amount} was spent on ${e.name}`)
    e.save()
  res.send({})
})
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})