const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    address : {
      city : String,
      street: String,
      apartment : Number
    }
  })
  const Person = mongoose.model('person', personSchema)
  let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 })
  console.log(p1)
  p1.save()
