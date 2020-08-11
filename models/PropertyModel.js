const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let propertySchema = new Schema({
  title: {
    type: String
  },
  posterId: {
    type: String
  },
  posterName: {
    type: String
  },
  details: {
    type: String
  },
  location: {
    type: String
  },
  price: {
    type: Number
  },
  Type: {
    type: String
  },
  address: {
    type: String
  },
  rooms: {
    type: Number
  },
  upload:{
    type:String
  },
  upload1:{
    type:String
  },
  upload2:{
    type:String
  },
  parking: {
    type: String
  },

}, {
    collection: 'properties'
  })

module.exports = mongoose.model('Property', propertySchema)