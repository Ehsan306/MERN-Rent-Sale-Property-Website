const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  dp: {
    type: String,
    required: true
  }
})

module.exports = User = mongoose.model('users', UserSchema)
